import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer } from '../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <ProfileContainer>
      <img src="https://github.com/viniciuscosta89.png" alt="Vinicius Costa" />
      <div>
        <strong>Vinicius Costa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}
