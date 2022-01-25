import {CounterState} from "../interface/interfaces";
import {CounterAction} from "../actions/actions";

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
   const {type} = action;
    switch (type) {
        case 'increaseBy':
            if (action.payload) {
                return {
                    ...state,
                    counter: state.counter + action.payload.value,
                    previous: state.counter,
                    changes: state.changes + 1
                }
            }
            return state;
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'decrement':
            return {
                counter: state.counter - 1,
                previous: state.counter,
                changes: state.changes + 1
            }
        default:
            return state;
    }
}

export default counterReducer;
