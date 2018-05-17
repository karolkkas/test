import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import { setVisibilityFilter } from '../../actions/filter';

const ControlPanel = ({ addTodo, setVisibilityFilter }) => {
    let input;
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let value = input.value.trim();
                    console.log(value);
                    if (value) {
                        addTodo(value);
                    }
                    value = '';
                }}
            >
                <input
                    type="text"
                    ref={(node) => input = node}
                />
                <button
                    type="submit"
                >Add Todo
            </button>
            </form>
            <select
                onChange={(e) => {
                    e.preventDefault();
                    const { value } = e.target;
                    setVisibilityFilter(value);
                }}
            >
                <option value="SHOW_ALL">Show all</option>
                <option value="SHOW_COMPLETED">Show completed</option>
                <option value="SHOW_UNCOMPLETED">Show uncompleted</option>
            </select>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text: string) => {
            dispatch(addTodo(text));
        },
        setVisibilityFilter: (filter: string) => {
            dispatch(setVisibilityFilter(filter));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ControlPanel);