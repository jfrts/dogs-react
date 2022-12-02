import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "@/context/user-context";
import { ReactSVG } from "react-svg";

import "./styles.css";

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className="user-header-nav">
      <NavLink to="/conta" end>
        <ReactSVG src="/assets/feed.svg" />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <ReactSVG src="/assets/estatisticas.svg" />
      </NavLink>
      <NavLink to="/conta/postar">
        <ReactSVG src="/assets/adicionar.svg" />
      </NavLink>
      <button onClick={userLogout}>
        <ReactSVG src="/assets/sair.svg" />
        Sair
      </button>
    </nav>
  )
}