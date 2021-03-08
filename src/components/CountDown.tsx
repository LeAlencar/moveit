import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css'
import { CountdownContext } from '../contexts/CountDownContext'


export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished ? (
        <button disabled
          className={styles.CountdownButton}
        >
          Ciclo encerrado
          <img src="icons/checkcircle.svg" alt="levelup" />
        </button>
      ) : (
          <>
            { isActive ? (
              <button type="button"
                className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar ciclo
              </button>

            ) : (
                <button type="button"
                  className={styles.CountdownButton}
                  onClick={startCountDown}
                >
                  Iniciar um ciclo
                </button>

              )}
          </>
        )}
    </div>
  )
}