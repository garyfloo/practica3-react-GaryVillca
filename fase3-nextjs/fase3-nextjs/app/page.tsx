"use client";
import { useState } from "react";

export default function Home() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState<string[]>([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (index: number) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mi TODO con Next.js (TypeScript)</h1>

      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
