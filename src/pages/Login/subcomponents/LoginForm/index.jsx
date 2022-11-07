import { Link } from "react-router-dom";
import { TOKEN_POST, GET_USER } from "@/api";
import { useForm } from "@/hooks/useForm";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";
import { useEffect } from "react";

async function login(username, password) {
  const { url, options } = TOKEN_POST({ username, password });

  const response = await fetch(url, options);
  const loginData = await response.json();

  window.localStorage.setItem("token", loginData.token);
  getUser(loginData.token);
}

async function getUser(token) {
  const { url, options } = GET_USER(token);

  const response = await fetch(url, options);
  const userData = await response.json();

  console.log(userData);
}

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

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
