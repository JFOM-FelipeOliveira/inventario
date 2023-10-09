import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";

const ListarObj = () => {

  const [modelo, setModelo] = useState("");
  const [desc, setDesc] = useState("");
  const [memoria, setMemoria] = useState("");
  const [armazenamento, setArmazenamento] = useState("");

  const objetosStorage = JSON.parse(localStorage.getItem("objetos_bd"));

  useEffect(() =>{
    setModelo(objetosStorage.modelo)
    setDesc(objetosStorage.desc)
    setMemoria(objetosStorage.memoria)
    setArmazenamento(objetosStorage.armazenamento)
  },[]);


  return (
    <div>
      <Navbar />
      <hr />
      <h1> Lista de Equipamentos </h1>
      <h2> {modelo} </h2>
      <h2> {desc} </h2>
      <h2> {memoria} </h2>
      <h2> {armazenamento} </h2>
    </div>
  )
}

export default ListarObj;