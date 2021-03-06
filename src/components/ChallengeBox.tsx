import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountDownContext'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountDown, } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="level-up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}