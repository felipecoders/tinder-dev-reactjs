import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Form, ErrorMessage } from "./styles";

export default function Login({ history }) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      debugger;
      if (!username || !email || !password || !confirmPassword) {
        setError("Preencha todos os campos");
        setTimeout(() => setError(""), 3000);
        return;
      }

      if (password !== confirmPassword) {
        setError("As senhas nao conferem");
        setTimeout(() => setError(""), 3000);
        return;
      }

      const { data } = await api.post("/user", { username, password, email });
      localStorage.setItem("user", data._id);
      history.push(`/dev/${data._id}`);
    } catch (e) {
      console.error(e);
      setError(e.response.data.message);
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
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="seu@email.com"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="digite sua senha"
        />
        <input
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="confirme a sua senha"
        />
        <button type="submit">Enviar</button>
        <Link to="/">Ja possuo um cadastro.</Link>
      </Form>
    </Container>
  );
}
