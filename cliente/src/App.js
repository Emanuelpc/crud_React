import { useState } from 'react';
import './App.css';
import Axios from "axios";


function App() {

  const[nombre,setNombre]=useState("");
  const[edad,setEdad]=useState(0);
  const[pais,setPais]=useState("");
  const[cargo,setCargo]=useState("");
  const[tiempoCargo,setTiempoCargo]=useState(0);


  const add=()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      edad:edad,
      pais:pais,
      cargo:cargo,
      tiempoCargo:tiempoCargo
    }).then(()=>{
      alert("Empleado registrado")
    })
  }
  

  return (
    <div className="App">
      <div className="datos">
        <label>Nombre: <input
        onChange={(event)=>{
          setNombre(event.target.value);
        }}
        type="text"></input></label>
        <label>Edad: <input 
        onChange={(event)=>{
          setEdad(event.target.value);
        }}
        type="number"></input></label>
        <label>Pais: <input 
        onChange={(event)=>{
          setPais(event.target.value);
        }}
        type="text"></input></label>
        <label>Cargo <input 
        onChange={(event)=>{
          setCargo(event.target.value);
        }}
        type="text"></input></label>
        <label>Tiempo Cargo: <input 
        onChange={(event)=>{
          setTiempoCargo(event.target.value);
        }}
        type="number"></input></label>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
