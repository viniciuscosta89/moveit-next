import styled from 'styled-components';

export const ToggleStyled = styled.div`
  position: fixed;
  bottom: 25%;
  right: 0;

  background-color: #424242;
  color: var(--white);
  box-shadow: -2px 0 24px rgba(0, 0, 0, 0.25);
  border-radius: 5px 0 0 5px;
  transition: all .3s ease-in-out;
  z-index: 10;

  .toggle {
    position: relative;
    display: inline-flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &__label {
      color: #eee;
      display: inline-block;
      font-weight: 600;
      transition: all .3s ease-in-out;
    }
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + .slider {
        > .switch {
          background-color: var(--blue);

          > .dot {
            background-color: var(--background);
            transform: translateX(20px) scale(1);
          }

        }
      }
    }

    + .slider {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 0.5rem;
      position: relative;
      transition: all .3s ease-in-out;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        transition: all .3s ease-in-out;
      }

      > .switch {
        display: inline-block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #969696;
        transition: .4s;
        width: 2.5rem;
        height: 1.25rem;
        border-radius: 2rem;
        margin-bottom: 0.5rem;
        position: relative;
        z-index: 1;

        > .dot {
          background: #ddd;
          position: absolute;
          top: -2px;
          left: -2px;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          transform: translate(0) scale(0.9);
          transition: all .3s ease-in-out;
        }
      }
    }
  }

`
