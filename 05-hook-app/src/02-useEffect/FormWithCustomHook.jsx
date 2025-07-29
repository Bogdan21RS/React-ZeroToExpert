import React from "react";
import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
  const form = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(form);
  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
