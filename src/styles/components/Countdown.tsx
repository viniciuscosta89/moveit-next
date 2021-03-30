import styled from 'styled-components';
import { motion } from "framer-motion";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani, 'sans-serif';
  font-weight: 600;
  color: var(--blue);
  transition: all 0.3s ease-in-out;

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: var(--border-radius);
    font-size: 5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;

    @media (min-width: 721px) {
      font-size: 8.5rem;
    }

    @media (min-width: 321px) and (max-width: 720px) {
      font-size: 7rem;
    }

    span {
      flex: 1;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;

      @media (min-width: 720px) {
        min-width: 84px;
      }

      &:first-child {
        border-right: 1px solid var(--number-divisor);
      }

      &:last-child {
        border-left: 1px solid var(--number-divisor);
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
    transition: all 0.3s ease-in-out;
  }
`

export const CountdownButton = styled(motion.button)`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: var(--border-radius);

  background-color: var(--blue);
  box-shadow: 0 8px 12px -8px var(--blue);
  color: var(--white-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 3rem;

  transition: all 0.3s ease-in-out;

  @media (min-width: 720px) {
    margin-bottom: 0;
  }

  &:hover {
    background-color: var(--blue-dark);
  }

  &:focus {
    outline-color: var(--blue-dark);
  }

  &:disabled {
    background-color: var(--white);
    border-bottom: 4px solid var(--green);
    box-shadow: none;
    color: var(--text);
    cursor: not-allowed;

    > span {
      margin-right: 1rem;
    }

    > img {
      opacity: 0.5;
      transform: scale3d(0 ,0 ,0);
    }
  }
`

export const CountdownButtonActive = styled(CountdownButton)`
  && {
    background-color: var(--white);
    box-shadow: 0 8px 12px -12px rgba(0, 0, 0, 1);
    color: var(--title);

    &:hover {
      background-color: var(--red);
      box-shadow: 0 8px 12px -8px var(--red);
      color: var(--white);
    }
  }
`
