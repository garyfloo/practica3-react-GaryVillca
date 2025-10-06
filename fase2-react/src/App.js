import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: task }]);
    setTask('');
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial' }}>
      <h1>Mi TODO - React</h1>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} placeholder="Nueva tarea" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => removeTodo(t.id)} style={{ marginLeft: 8 }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
