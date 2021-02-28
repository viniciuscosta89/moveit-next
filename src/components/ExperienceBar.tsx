import { useContext } from "react";
import { ExperienceBarStyled, CurrentExperienceStyled } from '../styles/components/ExperienceBar';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <ExperienceBarStyled>
        <span>0 xp</span>
        <div>
        <div style={{ width: `${isNaN(percentToNextLevel) ? 0 : percentToNextLevel}%` }} />
        <CurrentExperienceStyled
          style={{ left: `${isNaN(percentToNextLevel) ? 0 : percentToNextLevel}%` }}
          >
          {currentExperience === 0 ? '' : (isNaN(currentExperience) ? 0 : `${currentExperience} xp`)}
        </CurrentExperienceStyled>
        </div>
      <span>{isNaN(experienceToNextLevel) ? 64 : experienceToNextLevel} xp</span>
    </ExperienceBarStyled>
  );
}
