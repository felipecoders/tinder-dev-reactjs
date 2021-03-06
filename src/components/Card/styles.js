import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  footer {
    flex: 1;
    background: #fff;
    border: 1px solid #eee;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;

    strong {
      font-size: 16px;
      color: #333;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: #999;
      margin-top: 5px;
    }
  }

  .buttons-container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    button {
      height: 50px;
      box-shadow: 0 2px 2px 0 rgba(0 0 0 0.05);
      border: 0;
      border-radius: 4px;
      background: #fff;
      cursor: pointer;

      &:hover img {
        transform: translateY(-5px);
        transition-duration: all 0.2s;
      }
    }
  }
`;
