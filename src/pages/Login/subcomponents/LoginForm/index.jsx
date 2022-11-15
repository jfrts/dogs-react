import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/context/user-context";
import { useForm } from "@/hooks/useForm";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";
import { Error } from "@/components/helpers/Error";

import "./styles.css"

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  function submitForm(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="login-title">Bem-vindo(a) de volta!</h1>
      <p className="login-subtitle">Por favor, preencha seus dados de acesso.</p>

      <form onSubmit={submitForm}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...password} label="Senha" type="password" name="password" />

        <div className="login-support-buttons">
          <label htmlFor="save">
            <input type="checkbox" name="save" id="save" />
            <span>Lembre-me</span>
          </label>
          <Link to="/">Perdeu a senha?</Link>
        </div>

        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <Error errorMessage={error} />}
      </form>

      <div className="login-page-signup">
        <p>Não possui uma conta? <Link to="/login/criar">Cadastre-se</Link></p>
      </div>
    </section>
  );
}
