import styles from '../styles/components/Countdown.module.scss';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext.tsx';

let CountdownTimer: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(CountdownTimer);
    setIsActive(false);
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      CountdownTimer = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge()
    }
  }, [isActive, time])

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
        <button
          type="button"
          className={`${styles.countdownButton}`}
          disabled
        >
          <span>
            Ciclo encerrado
          </span>
          <img src="icons/checked.svg" alt="" />
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
              >
                Iniciar um ciclo
              </button>
              )
            }
          </>
        )}




    </div>
  )
}
