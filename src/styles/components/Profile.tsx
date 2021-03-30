import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: var(--border-radius-round);
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
      transition: all .3s ease-in-out;
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      transition: all .3s ease-in-out;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`
