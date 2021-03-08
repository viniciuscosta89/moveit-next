import styled from 'styled-components';

export const ExperienceBarStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

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
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  transition: left 0.5s ease-in-out;
  white-space: nowrap;
`
