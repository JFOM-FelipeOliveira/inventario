import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/cadastro";
import ListarObj from "../pages/equipamento/listarObj";
import CadastrarObj from "../pages/equipamento/cadastrarObj";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};


const PrivSignup = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Cadastro />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Private Item={Home } />} />
          <Route exact path="/cadastro" element={ <PrivSignup Item={Home} />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/listaobj" element={<Private Item={ListarObj} />} />
          <Route exact path="/cadastroobj" element={<Private Item={CadastrarObj} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
