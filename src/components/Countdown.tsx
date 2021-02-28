import { CountdownContainer, CountdownButton, CountdownButtonActive } from '../styles/components/Countdown';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton
          type="button"
          disabled
        >
          <span>
            Ciclo encerrado
          </span>
          <img src="icons/checked.svg" alt="Checked" />
        </CountdownButton>
      ) : (
          <>
            { isActive ? (
              <CountdownButtonActive
                type="button"
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </CountdownButtonActive>
            ) : (
                <CountdownButton
                  type="button"
                  onClick={startCountdown}
              >
                  Iniciar um ciclo
                </CountdownButton>
              )
            }
          </>
        )}
    </div>
  )
}
