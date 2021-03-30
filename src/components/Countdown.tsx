import { CountdownContainer, CountdownButton, CountdownButtonActive } from '../styles/components/Countdown';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { AnimatePresence, motion } from "framer-motion";

const fade = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  visibleDelay: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0
  },
}

const slideLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: -32,
  },
}

const slideRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 32,
  },
}

const slideBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 32,
  },
}

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
    <>
      <CountdownContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideLeft}
        >
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </motion.div>
        <motion.span
          initial="hidden"
          animate="visibleDelay"
          exit="hidden"
          variants={fade}
        >
          :
        </motion.span>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideRight}
        >
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </motion.div>
      </CountdownContainer>

      <AnimatePresence>
        { hasFinished ? (
          <CountdownButton
            type="button"
            disabled
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fade}
          >
            <span>
              Ciclo encerrado
            </span>
            <motion.img
              src="icons/checked.svg"
              alt="Checked"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideRight}
            />
          </CountdownButton>
        ) : (
            <>
              { isActive ? (
                <CountdownButtonActive
                  type="button"
                  onClick={resetCountdown}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fade}
                >
                  Abandonar ciclo
                </CountdownButtonActive>
              ) : (
                  <CountdownButton
                    type="button"
                    onClick={startCountdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideBottom}
                >
                    Iniciar um ciclo
                  </CountdownButton>
                )
              }
            </>
          )}
      </AnimatePresence>
    </>
  )
}
