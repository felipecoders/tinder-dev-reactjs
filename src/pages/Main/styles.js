import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
  }
`;

export const Empty = styled.div`
  font-size: 32px;
  color: ${props => props.theme.emptyTextColor};
  font-weight: bold;
  margin-top: 300px;
`;

export const MatchContainer = styled.div``;
