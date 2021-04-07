import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Container } from '../styles/pages/Home';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { LoginProvider } from '../contexts/LoginContext';
import { SidebarProvider, SidebarContext } from '../contexts/SidebarContext';
import { getSession, useSession } from 'next-auth/client';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  mode: string
}

export default function Home(props: HomeProps) {
  const [session] = useSession();
  const router = useRouter();
  const { isSideBarOpen } = useContext(SidebarContext);

  return (
    <LoginProvider session={session}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <SidebarProvider />
        <Container className={isSideBarOpen && 'open'}>
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
    </LoginProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { level, currentExperience, challengesCompleted, mode } = ctx.req.cookies;
  const session = await (getSession({ req }))

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end()
    return;
  }

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session: session,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      mode: String(mode)
    }
  }
}
