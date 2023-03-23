import styled from "styled-components";
import type { IContainerProps } from "./Post.types";

export const Container = styled.div<IContainerProps>`
  position: relative;
  margin-top: 2rem;

  .image {
    border-radius: var(--pm-br);
  }

  .description {
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
    text-align: justify;
    border-bottom: 1px solid var(--border-1);
  }

  .info {
    position: absolute;
    display: flex;
    top: -35px;
    left: 15px;

    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 50px;
      height: 50px;
      outline: 1px solid var(--orange-1);
      border: 2px solid var(--white);
      border-radius: var(--pm-br);
      background-image: ${(p) => `url(${p.avatar})`};
      background-size: cover;
    }

    &__name {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0.25rem;
    }
  }

  .toolbar {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    &__left {
    }

    &__right {
      &__list {
        list-style: none;
        display: flex;
        align-items: center;

        &__item {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          user-select: none;

          &__icon {
            font-size: 1.3rem;
            cursor: pointer;
            margin-right: 0.25rem;
          }

          &__count {
            font-size: 0.85rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
