import styled from "styled-components";

export const StyledHome = styled.div`
  .dashboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.colors.primary};
      padding: 2rem;

      .title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .value {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`;
