import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Empty } from "./styles";

import Card from "../../components/Card";
import MatchUser from "../../components/MatchUser";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

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

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: match.params.id }
    });

    socket.on("match", dev => {
      setMatchDev(dev);
    });

    return () => socket.close();
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
              key={user._id}
              user={user}
              handleLike={handleLike}
              handleDislike={handleDislike}
            />
          ))}
        </ul>
      )}

      {matchDev && (
        <MatchUser
          user={matchDev[0]}
          onClose={() =>
            matchDev.length > 1
              ? setMatchDev(matchDev.filter((m, i) => i !== 0))
              : setMatchDev(null)
          }
        />
      )}
    </Container>
  );
}
