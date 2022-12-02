import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserHeaderNav } from "../UserHeaderNav";

import "./styles.css";

export function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(function () {
    switch (location.pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Criar Postagem");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className="user-header">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}