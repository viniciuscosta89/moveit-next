import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.scss';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.levelUpModal}>
      <div className={styles.levelUpModal__overlay}>
        <div className={styles.levelUpModal__container}>
          <header className={styles.levelUpModal__header}>{level}</header>

          <strong className={styles.levelUpModal__title}>Parabéns!</strong>
          <p className={styles.levelUpModal__text}>Você alcançou um novo level.</p>

          <button className={styles.levelUpModal__btn} type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>
      </div>
    </div>
  )
}
