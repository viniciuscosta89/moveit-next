import { useContext, useState } from "react";
import styles from '../styles/components/ExperienceBar.module.scss';
import { ChallengesContext } from '../contexts/ChallengesContext';

// const ExperienceBarStyled = styled.header`
//   display: flex;
//   align-items: center;
//   margin-bottom: 2rem;

//   span {
//     font-size: 1rem;
//   }

//   > div {
//     flex: 1;
//     height: 4px;
//     border-radius: 4px;
//     background: var(--gray-line);
//     margin: 0 1.5rem;
//     position: relative;

//     > div {
//       background: var(--green);
//       border-radius: 4px;
//       height: 100%;
//       transition: width 0.5s ease-in-out;
//     }
//   }
// `

// const CurrentExperience = styled.span`
//   position: absolute;
//   top: 12px;
//   transform: translateX(-50%);
//   transition: left 0.5s ease-in-out;
// `

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <div>
      <div className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }} />
          <span className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience === 0 ? '' : `${currentExperience} xp`}
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </div>
    </div >
  );
}
