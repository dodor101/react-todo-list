import React, { useState } from 'react';

import './index.css';
import ListItem from './component/ListItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 4 * 3487749374934),
      todo: todo,
    };
    setTodos([...todos, newTodo]);
    setInput(' ');
  };

  const handleChange = (e) => {
    if (e.target.value === ' ') {
      alert('Enter todo');
    }
    setInput(e.target.value);
  };
  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  return (
    <div div className="App">
      <div className="form">
        <label>Add Todo</label>
        <input type="text" value={input} onChange={handleChange} placeholder="Cooking" />
        <button onClick={() => addTodo(input)}>Add todo</button>
        <ListItem todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
