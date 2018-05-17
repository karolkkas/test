import { SET_VISIBILITY_FILTER } from '../actions/filter';

const filters = (state = 'SHOW_ALL', { type, payload }) => {
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return payload.filter;
        default:
            return state;
    }
};

export default filters;