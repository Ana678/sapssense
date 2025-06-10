import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de autenticação
    console.log({ login, senha });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        label="Login"
        placeholder="Insira seu Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <div className="mb-6 w-full">
        <Input
          label="Insira seu Login"
          type="password"
          placeholder="Insira sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="text-right text-sm mt-1">
          <span className="text-gray-500">Esqueceu sua senha? </span>
          <a href="#" className="text-sky-600 hover:underline">Recupere aqui</a>
        </div>
      </div>

      <Button type="submit">Entrar</Button>
    </form>
  );
}
