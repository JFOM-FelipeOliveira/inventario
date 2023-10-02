import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./navbar.css";

const Navbar = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

  return (
    <div>
      <Link to="/home"> Home </Link>
      <Link to="/listaobj"> Equipamentos </Link>
      <Link to="/cadastroobj"> Cadastro de equipamentos </Link>
      <button onClick={() => [signout(), navigate("/")]}>Sair</button>
      <hr />
    </div>
  );
};

export default Navbar;
