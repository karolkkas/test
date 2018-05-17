import { addTodo, ADD_TODO } from './todos';
import uuid from 'uuid';

test('Should generate a ADD_TODO action object', () => {
    const action = addTodo('dupa');
    expect(action).toEqual({
        type: ADD_TODO,
        payload: {
            id: uuid(),
            text: 'dupa'
        }
    });
});