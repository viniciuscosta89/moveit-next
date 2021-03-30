import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LevelUpModalStyled } from '../styles/components/LevelUpModal';
import { motion } from "framer-motion";

export function LevelUpModal() {
  const { level, closeLevelUpModal, isLevelUpModalOpen } = useContext(ChallengesContext);

  const overlay = {
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
    exit: {
      opacity: 0
    }
  }

  const container = {
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
      opacity: 0, y: -100
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        delay: 0,
        duration: 0.3,
        ease: "easeInOut",
      },
    }
  }

  return (
    <LevelUpModalStyled>
      <motion.div
        className="overlay"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlay}
      >
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
        >
          <header className="header">{level}</header>

          <strong className="title">Parabéns!</strong>
          <p className="text">Você alcançou um novo level.</p>

          <button className="btn" type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </motion.div>
      </motion.div>

    </LevelUpModalStyled>
  )
}
