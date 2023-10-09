const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database:"inventario",
})

app.use(cors())
app.use(express.json())

app.post("/registro",(req,res) => {
   const  { email }  = req.body;
   const  { senha }  = req.body;

   let SQL = `INSERT INTO usuarios(email, senha) VALUES ('${email}', '${senha}')`;
   db.query(SQL, (err,result) => {
    console.log(err)
   });
})

app.get("/buscauser", (req, res) => {
    let SQL = "SELECT * FROM usuarios";

    db.query(SQL, (err,result) => {
        if(err) console.log(err)
        else res.send(result)

    })
})


app.listen(3001, () => {
    console.log("Servidor express online!")
})