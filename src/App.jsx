import { use, useState } from 'react'
import ListaTareas from "./ListaTareas"

const tareasIniciales = [
  { id: 1, texto: "Aprender React", hecha: false},
  {id : 2, texto: "Hacer ejercicio", hecha: false},
  {id: 3, texto: "Leer", hecha: false}
]

function App() {

  const [tareas, setTareas] = useState(tareasIniciales)
  const [nuevaTarea, setNuevaTarea] = useState("")

  function addTarea() {

    if (nuevaTarea === "") {
      return
    }

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      hecha: false
    }

    setTareas([...tareas, tarea])
    setNuevaTarea("")
  }

  function completarTarea(id) {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? {...tarea, hecha: true} : tarea))
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) =>  tarea.id !== id))
  }

  function tareaPendiente(id) {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? {...tarea, hecha: false} : tarea))
  }

  return (
    <div>
      <h1>Mis tareas</h1>
        <input 
          type="text" 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={addTarea}>Añadir tarea</button>
        <ListaTareas
          tareas = {tareas}
          onCompletar={completarTarea}
          onPendiente={tareaPendiente}
          onEliminar={eliminarTarea}
        />
    </div>
  )
}

export default App
