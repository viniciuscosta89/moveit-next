import { useContext } from "react";
import { ExperienceBarStyled, CurrentExperienceStyled } from '../styles/components/ExperienceBar';
import { ChallengesContext } from '../contexts/ChallengesContext';

const slideTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: -32,
  },
}

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <ExperienceBarStyled
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={slideTop}
    >
      <span>0</span>
      <div>
        <div style={{ width: `${isNaN(percentToNextLevel) ? 0 : percentToNextLevel}%` }} />
        <CurrentExperienceStyled
          style={{ left: `${isNaN(percentToNextLevel) ? 0 : percentToNextLevel}%` }}
          >
          {currentExperience === 0 ? '' : (isNaN(currentExperience) ? 0 : `${currentExperience} xp`)}
        </CurrentExperienceStyled>
      </div>
      <span>{isNaN(experienceToNextLevel) ? 64 : experienceToNextLevel}</span>
    </ExperienceBarStyled>
  );
}
