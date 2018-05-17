export const filterList = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed === true);
        case 'SHOW_UNCOMPLETED':
            return todos.filter(todo => todo.completed !== true);
    }
};