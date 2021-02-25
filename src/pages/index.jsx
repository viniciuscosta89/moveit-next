import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import { ExperienceBar } from '../components/ExperienceBar.tsx';
import { Profile } from '../components/Profile.tsx';
import { CompletedChallenges } from '../components/CompletedChallenges.tsx';
import { Countdown } from '../components/Countdown.tsx';
import { ChallengeBox } from '../components/ChallengeBox.tsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
