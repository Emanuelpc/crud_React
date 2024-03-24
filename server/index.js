const express= require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados_crud"
});

app.post("/create",(req,res)=>{
    const nombre=req.body.nombre;
    const edad=req.body.edad;
    const pais=req.body.pais;
    const cargo=req.body.cargo;
    const tiempoCargo=req.body.tiempoCargo;

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,tiempoCargo)Values(?,?,?,?,?)',[nombre,edad,pais,cargo,tiempoCargo],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado registrado Correctamente");
        }
    }
    );
})

app.listen(3001,()=>{
    console.log("Se esta corriendo en el puerto 3001");
})