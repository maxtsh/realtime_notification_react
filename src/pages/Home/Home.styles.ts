import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem;

  .posts {
    overflow-y: auto;
    margin-top: 1rem;
  }
`;
