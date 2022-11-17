import { useContext } from "react";
import { useForm } from "@/hooks/useForm";
import { UserContext } from "@/context/user-context";
import { POST_USER } from "@/api";

import { Link } from "react-router-dom";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";

import "./styles.css";

export function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function createUser(event) {
    event.preventDefault();
    const { url, options } = POST_USER({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const response = await fetch(url, options);

    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="login-title">Cadastre-se</h1>
      <div className="login-page-signin">
        <p>Já possui uma conta? <Link to="/login">Entrar</Link></p>
      </div>

      <form onSubmit={createUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}