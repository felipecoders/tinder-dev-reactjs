import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 20px;
    margin-top: 20px;
    font-size: 16px;
    color: #666;

    & + * {
      margin-top: 10px;
    }

    &::placeholder {
      color: #999;
    }
  }

  button {
    height: 48px;
    align-self: stretch;
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    background: #df4723;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  a {
    font-size: 12px;
    margin-top: 10px;
    text-align: right;
    color: #df4723;
    align-self: flex-start;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #dc143c;
  padding: 5px;
  text-align: center;
  margin-top: 15px;
`;
