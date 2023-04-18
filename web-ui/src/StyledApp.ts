import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: left;
    align-items: center;

    nav {
      margin-left: 2rem;
      align-items: center;
      font-size: 1rem;

      .navLink {
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 4px;

        &.active {
          background-color: ${(props) => props.theme.colors.secondary};
        }

        &.pending {
          background-color: ${(props) => props.theme.colors.default};
        }
      }
    }
  }

  main {
    padding: 2rem;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secondary};
    flex-grow: 1;
  }

  button {
    font-size: 1em;
    background: none;
    border: none;
    padding: none;
    cursor: pointer;

    &.danger {
      color: ${(props) => props.theme.colors.danger};
    }

    &.primary {
      color: ${(props) => props.theme.colors.default};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;

    div {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;
      }

      input {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid ${(props) => props.theme.colors.text};
        border-radius: 4px;

        &.error {
          border-color: ${(props) => props.theme.colors.danger};
        }
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      border: 1px solid ${(props) => props.theme.colors.text};
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
