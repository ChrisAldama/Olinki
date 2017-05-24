import {
    APPEND_LINE,
    CLEAN
} from '../actions/console_actions';

const initial_state = {
    content: []
};

export default (state = initial_state, action) => {
    switch(action.type) {
        case APPEND_LINE:
          return {
           ...state,
            content: state.content.push(action.payload)
          };

        case CLEAN:
          return {
            ...state,
            content: []
          };

        default:
          return state;
     }
};