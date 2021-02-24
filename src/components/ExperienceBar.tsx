import { useState } from "react";
import styles from '../styles/components/ExperienceBar.module.scss';

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
  const [experience, setExperience] = useState(0);

  function increaseExperience() {
    if (experience === 600) return
    setExperience(experience + 60);
  }

  function decreaseExperience() {
    if (experience === 0) return
    setExperience(experience - 60);
  }

  return (
    <div>
      <div className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${experience / 6}%` }} />
          <span className={styles.currentExperience}
            style={{ left: `${experience / 6}%` }}
          >
            {experience} xp
          </span>
        </div>
        <span>600 xp</span>
      </div>

      <button onClick={decreaseExperience}>- XP</button>
      <button onClick={increaseExperience}>+ XP</button>

    </div >
  );
}
