import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LevelUpModalStyled } from '../styles/components/LevelUpModal';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <LevelUpModalStyled>
      <div className="overlay">
        <div className="container">
          <header className="header">{level}</header>

          <strong className="title">Parabéns!</strong>
          <p className="text">Você alcançou um novo level.</p>

          <button className="btn" type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>
      </div>
    </LevelUpModalStyled>
  )
}
