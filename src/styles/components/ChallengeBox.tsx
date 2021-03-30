import styled from 'styled-components';
import { motion } from "framer-motion";

export const ChallengeBoxContainer = styled(motion.div)`
  height: 100%;

  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  transition: all 0.3s ease-in-out;
`

export const ChallengeNotActive = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`

export const ChallengeActive = styled(motion.div)`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
    margin-bottom: 2rem;
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    strong {
      color: var(--title);
      font-size: 2rem;
      font-weight: 600;
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: var(--border-radius);

      color: var(--white-text);

      font-size: 1.2rem;
      font-weight: 600;

      transition: all 0.3s ease-in-out;

      padding: 1rem 0.5rem;

      @media (min-width: 720px) {
        font-size: 1rem;
      }

      &:hover {
        filter: brightness(0.9);
        transform: translateY(-4px);
      }

      &:active {
        transform: translateY(-2px);
      }
    }
  }
`

export const ChallengeFailedButton = styled.button`
  background-color: var(--red);
  box-shadow: 0 4px 12px -6px var(--red);

  &:hover {
    box-shadow: 0 8px 18px -6px var(--red);
  }

  &:active {
    box-shadow: 0 6px 16px -6px var(--red);
  }
`

export const ChallengeSucceededButton = styled.button`
  background-color: var(--green);
  box-shadow: 0 4px 12px -6px var(--green);

  &:hover {
    box-shadow: 0 8px 18px -6px var(--green);
  }

  &:active {
    box-shadow: 0 6px 16px -6px var(--green);
  }
`
