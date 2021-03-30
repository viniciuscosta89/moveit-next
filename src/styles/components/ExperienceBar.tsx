import styled from 'styled-components';
import { motion } from "framer-motion";

export const ExperienceBarStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;

  @media (min-width: 720px) {
    margin-top: 0;
  }

  > span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
    transition: all 0.3s ease-in-out;

    > div {
      background: var(--green);
      box-shadow: 0 0 8px var(--green);
      border-radius: 4px;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }
  }
`

export const CurrentExperienceStyled = styled.span`
  &:not(:empty) {
    position: absolute;
    top: 1rem;
    font-weight: bold;
    transform: translateX(-50%);
    transition: left 0.5s ease-in-out;
    white-space: nowrap;

    background-color: var(--blue);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 8px -4px var(--blue);
    color: var(--white-text);
    padding: .5rem;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);

      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--blue);
      width: 0;
      height: 0;
    }
  }
`
