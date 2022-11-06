import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'

import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <nav className="container nav">
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <ReactSVG src="/assets/dogs.svg" />
        </Link>
        <Link to="/login" className="login">Login / Criar</Link>
      </nav>
    </header>
  );
}
