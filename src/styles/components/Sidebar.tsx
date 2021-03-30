import styled from 'styled-components';
import { motion } from "framer-motion";

export const SidebarWrapper = styled(motion.aside)`
  position: fixed;
  left: 0;
  top: 0;

  width: 0;
  height: 100vh;

  box-shadow: 2px 0 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  transform: translateX(-112px);
  transition: all 0.3s ease-in-out;

  background-color: var(--white);
  z-index: 10;

  @media (min-width: 720px) {
    transform: translateX(0);
    width: 112px;
  }

  &.open {
    transform: translateX(0);
    width: 112px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    list-style: none;

    > li {
      text-align: center;
      width: 100%;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    margin-bottom: 1rem;
    padding: 1rem;
    position: relative;
    stroke: var(--toggle-bg);
    transition: all .3s ease-in-out;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      transform: scaleY(0);
      transition: all .3s ease-in-out;

      background-color: var(--toggle-bg);
      border-radius: 0px 5px 5px 0px;
    }

    .sidebar-link {
      &__icon {
        font-size: 2rem;
      }

      &__label {
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        bottom: -0.5rem;
        transition: all .3s ease-in-out;

        @media (min-width: 720px) {
          opacity: 0;
          transform: translateY(-1.5rem) scale(0);
        }
      }
    }

    &.active {
      opacity: 1;
      color: var(--blue);
      stroke: var(--blue);

      &::before {
        background-color: var(--blue);
      }
    }

    &:hover {
      opacity: 1;

      &::before {
        transform: scaleY(1);
      }

      .sidebar-link {
        &__label {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }

    svg {
      transition: all 0.3s ease-in-out;
    }
  }
`

export const ToggleButton = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: var(--border-radius-round);
  box-shadow: 0 4px 8px -2px var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  transition: all .3s ease-in-out;
  z-index: 10;

  span {
    background-color: var(--white-text);
    border-radius: var(--border-radius);
    display: inline-block;
    width: 2rem;
    height: 4px;
  }
`
