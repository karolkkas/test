import { addTodo } from './../actions/todos';
import todos from './todos';
test('Action: ADD_TOTO -> should be new state of todos', () => {
    const action = addTodo('dupa');
    const state = todos([], action);
    expect(state).toEqual([{ id: '123abc', text: 'dupa', completed: false }])
})