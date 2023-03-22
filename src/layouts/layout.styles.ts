import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  #main {
    flex: 1;
    display: flex;
    padding: 1rem;
    background: var(--main-bg);

    &__content {
      flex: 50%;
    }
  }
`;
