import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';
import { ProfileContainer } from '../styles/components/Profile';
import { motion } from "framer-motion";

const slideLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
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
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 32,
  },
}

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { session } = useContext(LoginContext)

  return (
    <ProfileContainer>
      {session && (
        <>
          <motion.img
            src={session['user']['image']}
            alt={session['user']['image']}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideLeft}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideRight}
          >
            <strong>{session['user']['name']}</strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {level}
            </p>
          </motion.div>
        </>
      )}

      {!session && (
        <>
          <h1>Logue!</h1>
        </>
      )}

    </ProfileContainer>
  )
}
