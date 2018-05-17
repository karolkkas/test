import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setIsDone, removeTodo }) => {
    console.log(todos);
    return (
        <ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsDone(todo.id);
                    }}
                    removeTodo={(e) => {
                        e.stopPropagation();
                        removeTodo(todo.id);
                    }}
                />
            ))}
        </ul>
    );
};

export default TodoList;