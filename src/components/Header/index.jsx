import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'

import "./styles.css";

export function Header() {
  return (
    <header className="container">
      <nav>
        <Link to="/">
          <ReactSVG src="/assets/dogs.svg" />
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
