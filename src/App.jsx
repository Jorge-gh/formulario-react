import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [completado, setCompletado] = useState("")

  function onSubmit(event) {
    event.preventDefault();
    setCompletado(true);
  }

  if (completado == true){
    return<article>
      <header><h1></h1>{nombre} {apellido} <h1>Mensaje recibido✅</h1></header>
      <p><h1>Mensaje</h1>{mensaje}</p>
      <p><h1>Email</h1>{correo}</p>
    </article>
  }

  return (
    <>
      <form onSubmit={onSubmit}>
          <h1>Formulario</h1>
          <label>
            Nombre
            <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
          </label>
          <label>
            Apellido
            <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
          </label>
          <label>
            Email
            <input type="text" value={correo} onChange={(event) => setCorreo(event.target.value)}/>
          </label>
          <label>
            Mensaje
            <textarea  value={mensaje} onChange={(event) => setMensaje(event.target.value)}></textarea>
          </label>
          <br />
          <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default App
