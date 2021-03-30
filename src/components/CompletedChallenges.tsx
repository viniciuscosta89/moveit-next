import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CompletedChallengesContainer } from '../styles/components/CompletedChallenges';
import { motion } from "framer-motion";

const slideLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
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
      delay: 0.4,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 32,
  },
}

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <motion.span
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={slideLeft}
      >
        Desafios completos
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={slideRight}
      >
        {challengesCompleted}
      </motion.span>
    </CompletedChallengesContainer>
  )
}
