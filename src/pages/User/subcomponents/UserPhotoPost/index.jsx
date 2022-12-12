import "./styles.css";
import useForm from "@/hooks/useForm";
import useFetch from "@/hooks/useFetch";
import { RenderIf } from "@/components/render-if";
import { Error } from "@/components/helpers/Error";
import { Input } from "@/components/form/Input";
import { Button } from "@/components/form/Button";
import { useState } from "react";
import { POST_PHOTO } from "@/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function UserPhotoPost() {
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);
    const token = window.localStorage.getItem("token");
    const { url, options } = POST_PHOTO(formData, token);
    await request(url, options);
  }

  function handleImgChange({ target }) {
    if (target.files[0]) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    } else {
      setImg({});
    }
  }

  useEffect(function () {
    if (data) {
      navigate("/conta");
    }
  }, [data, navigate]);

  return (
    <section className="photo-post-section">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <Input label="Imagem" type="file" name="img" id="img" onChange={handleImgChange} />

        <RenderIf condition={!loading}>
          <Button>Enviar</Button>
        </RenderIf>

        <RenderIf condition={loading}>
          <Button disabled>Enviando...</Button>
        </RenderIf>

        <Error>{error}</Error>
      </form>
      <RenderIf condition={img.preview}>
        <div className="image-preview">
          <img src={img.preview} alt="Post" />
        </div>
      </RenderIf>

      <RenderIf condition={!img.preview}>
        <div className="no-image-preview">
          Prévia da Imagem
        </div>
      </RenderIf>
    </section>
  )
}