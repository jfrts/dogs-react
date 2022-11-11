import { Link } from "react-router-dom";
import { useForm } from "@/hooks/useForm";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";
import { UserContext } from "../../../../context/user-context";
import { useContext } from "react";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  function submitForm(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
