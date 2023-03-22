import styled from "styled-components";
import type { IContainerProps } from "./Story.types";

export const Container = styled.div<IContainerProps>`
  position: relative;
  width: 150px;
  height: 220px;
  background-image: ${(p) => `url(${p.src})`};
  background-size: cover;
  border-radius: var(--pm-br);

  .info {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: -35px;
    left: 15px;

    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 50px;
      height: 50px;
      outline: 1px solid #af2f01;
      border: 2px solid var(--white);
      border-radius: var(--pm-br);
      background-image: ${(p) => `url(${p.avatar})`};
      background-size: cover;

      &__add {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #f4591f;

        &__icon {
          font-size: 1.25rem;
          color: var(--white);
        }
      }
    }

    &__name {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0.25rem;
    }
  }
`;
