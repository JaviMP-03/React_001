function ListaTareas({ tareas, onCompletar, onPendiente, onEliminar }) {
  return (
    <div>
      {tareas.map((tarea) => (
        <div key={tarea.id} className={`tarea ${tarea.hecha ? "hecha" : ""}`}>
          <p>{tarea.texto}</p>
          <div className="botones">
            <button className="btn-completar" onClick={() => onCompletar(tarea.id)}>Completar</button>
            <button className="btn-pendiente" onClick={() => onPendiente(tarea.id)}>Pendiente</button>
            <button className="btn-eliminar" onClick={() => onEliminar(tarea.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListaTareas