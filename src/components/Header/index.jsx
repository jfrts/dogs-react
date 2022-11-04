import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'

import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <nav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <ReactSVG src="/assets/dogs.svg" />
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
