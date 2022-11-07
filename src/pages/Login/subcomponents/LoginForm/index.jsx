import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";

function login(username, password) {
  fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();
    login(username, password);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
