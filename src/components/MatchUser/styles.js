import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: 30px 0;
  }

  strong {
    font-size: 32px;
    color: #fff;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.8);
  }

  button {
    border: 0;
    background: transparent;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    margin-top: 30px;
    cursor: pointer;
  }
`;
