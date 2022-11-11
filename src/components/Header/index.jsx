import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import { UserContext } from "@/context/user-context";

import "./styles.css";

export function Header() {
  const { data } = useContext(UserContext);
  
  return (
    <header className="header">
      <nav className="container nav">
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <ReactSVG src="/assets/dogs.svg" />
        </Link>
        {
          (data && data.nome)
            ? <Link to="/conta" className="login">{data.nome}</Link>
            : <Link to="/login" className="login">Login / Criar</Link>
        }
      </nav>
    </header>
  );
}
