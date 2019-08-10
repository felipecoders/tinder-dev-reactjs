import React from "react";

import itsamatch from "../../assets/itsamatch.png";
import { Container } from "./styles";

export default function MatchUser({ user, onClose }) {
  return (
    <Container>
      <img src={itsamatch} />
      <img className="avatar" src={user.avatar} />
      <strong>{user.name}</strong>
      <p>{user.bio}</p>
      <button type="button" onClick={onClose}>
        FECHAR
      </button>
    </Container>
  );
}
