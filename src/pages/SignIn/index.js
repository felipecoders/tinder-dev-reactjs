import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Form, ErrorMessage } from "./styles";

export default function Login({ history }) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/devs", { username, password });
      localStorage.setItem("user", data._id);
      history.push(`/dev/${data._id}`);
    } catch (e) {
      setError("Usuario ou senha nao confere!");
      setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="digite o seu usuario no Github"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="digite sua senha"
        />
        <button type="submit">Enviar</button>
        <Link to="/signup">Nao possui cadastro?</Link>
      </Form>
    </Container>
  );
}
