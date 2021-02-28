import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani, 'sans-serif';
  font-weight: 600;
  color: var(--title);
  transition: all 0.3s ease-in-out;

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;

    span {
      flex: 1;
      min-width: 84px;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;

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

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--blue-dark);
  }

  &:focus {
    outline-color: var(--blue-dark);
  }

  &:disabled {
    background-color: var(--white);
    border-bottom: 4px solid var(--green);
    color: var(--text);
    cursor: not-allowed;

    > span {
      margin-right: 1rem;
    }

    > img {
      animation: fadeIn .75s ease-in-out 0.5s forwards;
      opacity: 0.5;
      transform: scale3d(0 ,0 ,0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0.5;
      transform: scale3d(0 ,0 ,0);
    }

    20% {
      transform: scale3d(1.2, 1.2, 1.2)
    }

    40% {
      transform: scale3d(.9, .9, .9);
    }

    60% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`

export const CountdownButtonActive = styled(CountdownButton)`
  background-color: var(--white);
  color: var(--title);

  &:hover {
    background-color: var(--red);
    color: var(--white);
  }
`
