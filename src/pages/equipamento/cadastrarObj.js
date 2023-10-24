import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Axios from "axios";

const CadastrarObj = () => {
  const navigate = useNavigate();
  const [tombo, setTombo] = useState("");
  const [desc, setDesc] = useState("");
  const [marca, setMarca] = useState("");
  const [sistema, setSistema] = useState("");
  const [memoria, setMemoria] = useState("");
  const [armazenamento, setArmazenamento] = useState("");
  const [local, setLocal] = useState("");
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/buscalocais").then((Response) => {
      setLocais(Response.data);
    });
  }, []);

  const handleLocal = (event) => {
      setLocal(event.target.value);
  };

  const handleCadastro = () => {
      Axios.post("http://localhost:3001/registroobj", {
        tombo: tombo,
        desc: desc,
        marca: marca,
        sistema: sistema,
        memoria: memoria,
        armazenamento: armazenamento,
        local: local,
      }).then((response) => console.log(response));
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
          value={tombo}
          onChange={(e) => setTombo(e.target.value)}
          placeholder="Tombamento"
          required
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Descrição"
          required
        />
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          placeholder="marca do equipamento"
          required
        />
        <input
          type="text"
          value={sistema}
          onChange={(e) => setSistema(e.target.value)}
          placeholder="Sistema Operacional"
          required
        />
        <input
          type="number"
          value={memoria}
          onChange={(e) => setMemoria(e.target.value)}
          placeholder="Memória RAM"
          required
        />
        <input
          type="number"
          value={armazenamento}
          onChange={(e) => setArmazenamento(e.target.value)}
          placeholder="Armazenamento do HD/SSD"
          required
        />
        <select value={local} onChange={handleLocal}>
          <option> Local </option>
          {locais.map((item) => (
            <option key={item.id_local}> {item.local} </option>
          ))}
        </select>
        {local === "" || local === "Local" ? 
          <button disabled onClick={handleCadastro}> Go </button> : 
          <button onClick={handleCadastro}> Go </button> }
      </form>
    </div>
  );
};

export default CadastrarObj;
