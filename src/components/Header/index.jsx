import { Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <header className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
