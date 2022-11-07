import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@/hooks/useForm";
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
      return response.json();
    })
    .then((json) => {
    });
}

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  function submitForm(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      login(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...password} label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
