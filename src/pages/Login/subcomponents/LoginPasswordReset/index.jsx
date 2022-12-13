import { PASSWORD_RESET } from "@/api";
import { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";
import useFetch from "@/hooks/useFetch";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";
import { RenderIf } from "@/components/render-if";
import { Error } from "@/components/helpers/Error";
import { useNavigate } from "react-router-dom";

export function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const { request, loading, error } = useFetch();
  const navigate = useNavigate();

  async function resetPassword(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate("/login");
      }
    }
  }

  useEffect(function () {
    const params = new URLSearchParams(window.location.search);
    const paramLogin = params.get("login");
    const paramKey = params.get("key");

    if (paramLogin && paramKey) {
      setLogin(paramLogin);
      setKey(paramKey);
    }
  }, []);

  return (
    <section className="passwd-form">
      <h1 className="title">Crie uma nova senha</h1>

      <form onSubmit={resetPassword}>
        <Input label="Nova Senha" type="password" name="password" {...password} />

        <RenderIf condition={!loading}>
          <Button>Enviar</Button>
        </RenderIf>

        <RenderIf condition={loading}>
          <Button disabled>Criando senha...</Button>
        </RenderIf>

        <Error errorMessage={error} />
      </form>
    </section>
  )
}