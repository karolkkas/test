import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_IS_DONE = 'SET_IS_DONE';

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: uuid(),
        text
    }
});

export const removeTodo = (id: string) => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
});

export const setIsDone = (id: string) => ({
    type: SET_IS_DONE,
    payload: {
        id
    }
});