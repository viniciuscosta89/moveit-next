import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeFailedButton, ChallengeSucceededButton } from '../styles/components/ChallengeBox';
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
  hidden: {
    opacity: 0
  },
}

const slideUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: -32,
  },
}

const slideDown = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 32,
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

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={slideRight}
    >
      <AnimatePresence>
        { activeChallenge ? (
          <ChallengeActive
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fade}
          >
            <motion.header
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideUp}
            >
              Ganhe {activeChallenge.amount} xp
            </motion.header>

            <motion.main
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideUp}
            >
              <img
                src={`icons/${activeChallenge.type}.svg`}
                alt="Ícone"
              />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </motion.main>

            <motion.footer
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideDown}
            >
              <ChallengeFailedButton
                type="button"
                onClick={handleChallengeFailed}
              >
                Falhei
              </ChallengeFailedButton>

              <ChallengeSucceededButton
                type="button"
                onClick={handleChallengeSucceeded}
              >
                Completei
              </ChallengeSucceededButton>
            </motion.footer>
          </ChallengeActive>
        ) : (
            <ChallengeNotActive
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fade}
            >
              <strong>Finalize um ciclo para receber um desafio</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios!
            </p>
            </ChallengeNotActive>
          )
        }
      </AnimatePresence>
    </ChallengeBoxContainer>
  )
}
