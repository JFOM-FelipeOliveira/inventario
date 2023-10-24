import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

const Cadastro = () => {
  const [users, setUsers] = useState();

  const handleSignup = (value) => {
    setUsers((prevValue) => ({
      ...prevValue, [value.target.name]: value.target.value, 
    }))
  };
  console.log(users)

  const handleClick = () => {
    Axios.post("http://localhost:3001/registro",{
      email: users.email,
      senha: users.senha,
    }).then((response) => console.log(response));

  }
  return (
    <div>
      <h1>SISTEMA DE CADASTRO</h1>
      <form>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          name="email"
          onChange={handleSignup} />
        <input
          type="password"
          placeholder="Digite sua Senha"
          name="senha"
          onChange={handleSignup} />
          <button onClick={handleClick}> Inscrever-se </button>
        <h3>
          Já tem uma conta?
          <button> <Link to="/">&nbsp;Entre</Link> </button>
        </h3>
      </form>
    </div>
  );
};

export default Cadastro;