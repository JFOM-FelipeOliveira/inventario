import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const CadastrarObj = () => {
  const navigate = useNavigate();
  const [modelo, setModelo] = useState("");
  const [desc, setDesc] = useState("");
  const [memoria, setMemoria] = useState("");
  const [armazenamento, setArmazenamento] = useState("");

  const handleCadastro = () => {
    let equipamento = {modelo, desc, memoria, armazenamento}
    localStorage.setItem("objetos_bd", JSON.stringify(equipamento));
    alert("Equipamento cadatrado com sucesso!");
    navigate("/listaobj");
  };

  return (
    <div>
      <Navbar />
      <hr />
      <h1>Cadastro de equipamento</h1>
      <form>
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          placeholder="Modelo do equipamento"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={memoria}
          onChange={(e) => setMemoria(e.target.value)}
          placeholder="Memória RAM"
        />
        <input
          type="number"
          value={armazenamento}
          onChange={(e) => setArmazenamento(e.target.value)}
          placeholder="Armazenamento do HD/SSD"
        />
        <button onClick={handleCadastro}> Go </button>
      </form>
    </div>
  );
};

export default CadastrarObj;
