import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0.5rem 1rem;
  box-shadow: var(--pm-bx-sh);

  .left {
    flex: 25%;
  }

  .middle {
    flex: 50%;
  }

  .right {
    flex: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
