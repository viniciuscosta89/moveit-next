import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viniciuscosta89.png" alt="Vinicius Costa" />
      <div>
        <strong>Vinicius Costa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
