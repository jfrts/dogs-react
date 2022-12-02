import "./styles.css";
import { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { UserContext } from "@/context/user-context";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { RenderIf } from "@/components/render-if";


export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMatchMedia("(max-width: 64rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(function () {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <RenderIf condition={mobile}>
        <button
          aria-label="Menu"
          className={`mobile-button ${mobileMenu && "mobile-menu-active"}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
        </button>
      </RenderIf>

      <nav className={`${mobile ? "user-header-nav-mobile" : "user-header-nav"} ${mobileMenu && "user-header-nav-mobile-active"}`}>
        <NavLink to="/conta" end>
          <ReactSVG src="/assets/feed.svg" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <ReactSVG src="/assets/estatisticas.svg" />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <ReactSVG src="/assets/adicionar.svg" />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <ReactSVG src="/assets/sair.svg" />
          Sair
        </button>
      </nav>

    </>

  )
}