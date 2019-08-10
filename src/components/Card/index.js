import React from "react";

import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

import { Container } from "./styles";

export default function Card({ user, handleLike, handleDislike }) {
  return (
    <Container>
      <img src={user.avatar} alt={user.name} />
      <footer>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
      </footer>
      <div className="buttons-container">
        <button type="button" onClick={() => handleDislike(user._id)}>
          <img src={dislike} alt="like" />
        </button>
        <button type="button" onClick={() => handleLike(user._id)}>
          <img src={like} alt="like" />
        </button>
      </div>
    </Container>
  );
}
