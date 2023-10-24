import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./navbar.css";

const Navbar = () => {
    const { signout } = useAuth();
    const  {user} = useAuth();
    const navigate = useNavigate();

  return (
    <div className="menu">
      <div className="menu">
        <button> <Link to="/home"> Home </Link> </button>
        <button> <Link to="/listaobj"> Equipamentos </Link> </button>
        <button> <Link to="/cadastroobj"> Cadastro de equipamentos </Link> </button>
      </div>
      <h2> {user.email} </h2>
      <button onClick={() => [signout(), navigate("/")]}>Sair</button>
    </div>
  );
};

export default Navbar;
