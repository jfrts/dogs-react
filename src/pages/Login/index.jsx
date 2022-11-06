import { Route, Routes } from "react-router-dom";

import { LoginForm } from "./subcomponents/LoginForm";

export function Login() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={"<LoginCreate />"} />
        <Route path="/recuperar-senha" element={"<LoginPasswordLost />"} />
        <Route path="/resetar-senha" element={"<LoginPasswordReset />"} />
      </Routes>
    </>
  );
}
