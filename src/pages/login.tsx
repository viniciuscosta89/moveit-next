import React, { useContext } from 'react';
import Head from 'next/head';
import { LoginWrapper } from '../styles/pages/Login';
import { LoginContext, LoginProvider } from '../contexts/LoginContext';
import { getSession, providers, signIn } from 'next-auth/client';
import { motion } from "framer-motion";

export default function Login() {
  const { session, handleSignout } = useContext(LoginContext)

  const slideUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -32,
    },
  }

  const slideDown = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 32,
    },
  }

  return (
    <LoginWrapper>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className="login__container">

        <div className="login__content">

          <LoginProvider session={session}>
            <motion.img
              className="login__logo"
              src="./img/logo.png"
              srcSet="./img/logo@2x.png 2x"
              alt="My default image"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideUp}
            />

            <motion.div
              className="github"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideDown}
            >
              <h2 className="github__title">Bem-vindo</h2>

              {session && <button onClick={handleSignout}>Deslogar</button>}


              <button className="github__msg" onClick={() => signIn('github', {
                callbackUrl: 'http://localhost:3000'
              })}>
                <img
                  className="github__logo"
                  src="./img/github-logo.svg"
                  alt="Github Logo"
                />
                <span>
                  Faça login com GitHub para começar
                </span>
              </button>
            </motion.div>
          </LoginProvider>

        </div>

      </div>
    </LoginWrapper>
  )
}

export const getServerSideProps = async (context: { req: any; res: any; }) => {
  const { req, res } = context;
  const session = await (getSession({ req }))

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end()
    return;
  }
  return {
    props: {
      session: null,
      providers: await providers()
    }
  }
}
