import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bodyBackground};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  img {
  }

  input {
    height: 48px;
    border: 1px solid ${props => props.theme.input.borderColor};
    border-radius: 4px;
    padding: 0 20px;
    margin-top: 20px;
    font-size: 16px;
    background: ${props => props.theme.input.background};
    color: ${props => props.theme.input.color};

    & + * {
      margin-top: 10px;
    }

    &::placeholder {
      color: ${props => props.theme.input.placeholderColor};
    }
  }

  button {
    height: 48px;
    align-self: stretch;
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    background: ${props => props.theme.button.background};
    color: ${props => props.theme.button.color};
    font-weight: bold;
    cursor: pointer;
  }

  a {
    font-size: 12px;
    margin-top: 10px;
    text-align: right;
    color: ${props => props.theme.button.background};
    align-self: flex-start;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${props => props.theme.errorMessage};
  padding: 5px;
  text-align: center;
  margin-top: 15px;
`;
