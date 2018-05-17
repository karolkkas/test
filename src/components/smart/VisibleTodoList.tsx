import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../dumb/TodoList';
import { setIsDone, removeTodo } from '../../actions/todos';
import { filterList } from '../../selectors/todos';

const mapStateToProps = state => ({
    todos: filterList(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) => {
    return {
        setIsDone: (id) => {
            dispatch(setIsDone(id));
        },
        removeTodo: (id: string) => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);