import { createStore, combineReducers } from 'redux';
import filter from './../reducers/filters';
import todos from './../reducers/todos';

const store = createStore(
    combineReducers({
        filter,
        todos
    }),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;