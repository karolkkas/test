import { ADD_TODO, REMOVE_TODO, SET_IS_DONE } from '../actions/todos';

const todos = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    ...payload,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== payload.id);
        case SET_IS_DONE:
            return state.map(todo => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        default:
            return state;
    }
};

export default todos;