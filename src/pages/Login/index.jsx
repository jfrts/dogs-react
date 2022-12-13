import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { LoginForm } from "./subcomponents/LoginForm";
import { LoginCreate } from "./subcomponents/LoginCreate";
import { LoginPasswordLost } from "./subcomponents/LoginPasswordLost";
import { LoginPasswordReset } from "./subcomponents/LoginPasswordReset";
import { Page404 } from "@/components/Page404";

import "./styles.css";

export function Login() {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="/conta" />
  }

  return (
    <section className="login-section">
      <div className="login-section-forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/recuperar-senha" element={<LoginPasswordLost />} />
          <Route path="/resetar-senha" element={<LoginPasswordReset />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </section>
  );
}
