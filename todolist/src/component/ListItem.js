import React from 'react'

function ListItem({todos, deleteTodo}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
             {todo.todo}
            <button onClick={() => deleteTodo(todo.id)} className="delete">
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem
