import { ADD_TO_ORDER_LIST } from '../actions/addToOrderList';
import { DELETE_FROM_ORDER_LIST } from '../actions/deleteFromOrderList'
import { CHANGE_ORDER_LIST } from "../actions/changeOrderList";

const initialState = [ ];

function orderList (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_ORDER_LIST:
            return [{name: action.payload.name, id: state.length+1}, ...state];
        case DELETE_FROM_ORDER_LIST:
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index+1)
            ];
        case CHANGE_ORDER_LIST:
            return [
                ...state.slice(0, action.payload.index),
                {...state[action.payload.index], name: action.payload.name},
                ...state.slice(action.payload.index+1)
            ];
        default:
            return state;

    }
}

export { orderList }