import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Empty } from "./styles";

import Card from "../../components/Card";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      console.log(match.params.id);
      const { data } = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      console.log(data);
      setUsers(data);
    }
    loadUsers();
  }, [match.params.id]);

  async function handleDislike(id) {
    try {
      await api.post(`/devs/${id}/dislikes`, null, {
        headers: {
          user: match.params.id
        }
      });
      setUsers(users.filter(user => user._id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLike(id) {
    try {
      await api.post(`/devs/${id}/likes`, null, {
        headers: {
          user: match.params.id
        }
      });
      setUsers(users.filter(user => user._id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>

      {users.length === 0 ? (
        <Empty>Acabou :(</Empty>
      ) : (
        <ul>
          {users.slice(0, 6).map((user, index) => (
            <Card
              key={user.id}
              user={user}
              handleLike={handleLike}
              handleDislike={handleDislike}
            />
          ))}
        </ul>
      )}
    </Container>
  );
}
