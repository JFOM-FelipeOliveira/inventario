import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  useEffect(()=>{
    navigate("/");
  },[])
  

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const res = signin(email, senha);

    if(res){
      setError(res);
      return;
    }
    navigate("/home")

  };


  return (
    <div>
      <h1>SISTEMA DE LOGIN</h1>
      <form>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          required
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          required
        />
        <button onClick={handleLogin}> Entrar </button>
        <h3> {error} </h3>
        <h3>
          Não tem uma conta?
          <Link to="/cadastro">&nbsp;Registre-se</Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
