import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Axios from "axios";
import "./listarObj.css";

const Equipamento = () => {
  const [objeto, setObjeto] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/buscaobj").then((Response) => {
      setObjeto(Response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <hr />
      <div className="lista">
        {objeto.length > 0 &&
          objeto.map((equip) =>
            equip.descricao === "Monitor" ? (
              <div key={equip.id_equip} className="equipamento">
                <h2 className="desc"> {equip.descricao} {equip.marca} </h2>
                <h2 className="desc"> Tombo: {equip.tombamento} </h2>
                <h2 className="desc"> Local: {equip.local} </h2>
              </div>
            ) : (
              <div key={equip.id_equip} className="equipamento">
                <h2 className="desc"> {equip.descricao} {equip.marca} </h2>
                <h2 className="desc"> Tombo: {equip.tombamento} </h2>
                <h2> Memória RAM: {equip.memoria} GB </h2>
                <h2> HD/SSD: {equip.armazenamento} GB </h2>
                <h2> SO : {equip.sistema} </h2>
                <h2> Local: {equip.local} </h2>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default Equipamento;
