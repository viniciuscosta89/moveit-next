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

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
  }

  .container {
    background-color: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
    transition: all .3s ease-in-out;
  }

  .header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url("/icons/levelup.svg") center/contain no-repeat;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.25rem;
    color: var(--title);
    transition: all .3s ease-in-out;
  }

  .text {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
    transition: all .3s ease-in-out;
  }

  .btn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: var(--background);
    border: none;
    border-radius: 50%;
    font-size: 0;
    opacity: 0.75;
    transition: all .3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`
