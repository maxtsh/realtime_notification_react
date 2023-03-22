import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 60%;
    padding: 2rem;
    background-color: var(--gray-1);

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;

      &__logo {
        width: auto;
        height: auto;
        max-width: 100px;
      }

      &__title {
        font-size: 3rem;
        font-weight: 700;
      }

      &__text {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
      }
    }
  }

  .right {
    position: relative;
    display: flex;
    align-items: center;
    flex: 40%;
    padding: 2rem;
    background-color: var(--white);

    &__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__info {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
          font-size: 2rem;
          font-weight: 700;
        }

        &__text {
          font-size: 1rem;
          font-weight: 400;
          text-align: center;
        }
      }

      &__form {
        width: 100%;
        max-width: 300px;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        &__input {
          margin-top: 0.5rem;
          height: 40px;
          padding: 0.25rem;
          border: 1px solid var(--border-1);
          outline: none;
          border-radius: var(--pm-br);
          background-color: var(--gray-1);
        }

        &__submit {
          margin-top: 1rem;
          color: var(--white);
          background-color: var(--blue-1);
          border: 1px solid var(--border-1);
        }
      }
    }

    &__credit {
      position: absolute;
      bottom: 20px;
      left: 20px;

      &__text {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;

        &__name {
          font-weight: 700;
          color: var(--blue-1);
        }
      }
    }
  }
`;
