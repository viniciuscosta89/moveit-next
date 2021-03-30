import styled from 'styled-components';

export const LevelUpModalStyled = styled.div`
  .overlay {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0 ;
    right: 0;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background-color: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
    transition: background-color .3s ease-in-out;
  }

  .header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url("/icons/levelup.svg") center/contain no-repeat;
    margin-bottom: 1rem;
  }

  .title {
    display: block;
    font-size: 2.25rem;
    color: var(--title);
    margin-bottom: 1rem;
    transition: all .3s ease-in-out;
  }

  .text {
    font-size: 1.25rem;
    color: var(--text);
    transition: all .3s ease-in-out;
  }

  .btn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: var(--background);
    border: none;
    border-radius: var(--border-radius-round);
    font-size: 0;
    opacity: 0.75;
    transition: all .3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .fade {
    &-entering {
      opacity: 1;
    }
    &-entered {
      opacity: 1;
    }
    &-exiting {
      opacity: 0;
    }
    &-exited {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slideUpIn {
    from {
      opacity: 0;
      transform: translateY(-10rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
