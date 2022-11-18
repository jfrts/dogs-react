import { useState } from "react";

const validationTypes = {
  email: {
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Preencha um email válido!"
  }
}

export default function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    }

    if (validationTypes[type] && !validationTypes[type].regex.test(value)) {
      setError(validationTypes[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}
