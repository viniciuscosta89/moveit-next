import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Container } from '../styles/pages/Home';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  mode: string
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <header>
          <ExperienceBar />
        </header>

        <CountdownProvider>
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
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, mode } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      mode: String(mode)
    }
  }
}
