import "./styles.css";
import useForm from "@/hooks/useForm";
import useFetch from "@/hooks/useFetch";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/Form/Button";
import { PASSWORD_LOST } from "@/api";
import { RenderIf } from "@/components/render-if";
import { Error } from "@/components/helpers/Error";

export function LoginPasswordLost() {
  const { data, loading, error, request } = useFetch();
  const login = useForm();

  async function resetPassword(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("recuperar-senha", "resetar-senha")
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft passwd-form">
      <h1 className="title">Perdeu a senha?</h1>

      <RenderIf condition={data}>
        <p className="email-message-sent">✅ {data}</p>
      </RenderIf>

      <RenderIf condition={!data}>
        <form onSubmit={resetPassword}>
          <Input label="E-mail / Usuário" type="text" name="email" {...login} />
          <RenderIf condition={!loading}>
            <Button>Enviar E-mail</Button>
          </RenderIf>
          <RenderIf condition={loading}>
            <Button disabled>Enviando...</Button>
          </RenderIf>
        </form>
        <Error errorMessage={error} />
      </RenderIf>
    </section>
  )
}