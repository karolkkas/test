import React from 'react';

const Todo = ({ completed, text, onClick, removeTodo }) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onClick}
    >
        {text}
        <button onClick={removeTodo}>Delete</button>
    </li>
);

export default Todo;