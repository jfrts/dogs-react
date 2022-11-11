import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import { UserContext } from "@/context/user-context";

import "./styles.css";

export function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav">
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <ReactSVG src="/assets/dogs.svg" />
        </Link>
        {
          (data && data.nome)
            ? (
              <div>
                <Link to="/conta" className="login">
                  {data.nome}
                </Link>
                <button onClick={userLogout}>Sair</button>
              </div>
            ) : <Link to="/login" className="login">Login / Criar</Link>
        }
      </nav>
    </header>
  );
}
