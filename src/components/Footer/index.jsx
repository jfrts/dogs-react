import "./styles.css";
import { ReactSVG } from "react-svg";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <ReactSVG src="/assets/dogs-footer.svg" />
        <h1>Projeto React desenvolvido no curso React Completo da Origamid.</h1>
      </div>
    </footer>
  );
}
