import { ADD_TO_ORDER_LIST } from '../actions/addToOrderList';
import { DELETE_FROM_ORDER_LIST } from '../actions/deleteFromOrderList'
import { CHANGE_ORDER_LIST } from "../actions/changeOrderList";

const initialState = [ ];

function orderList (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_ORDER_LIST:
            return [{name: action.name, id: state.length}, ...state];
        case DELETE_FROM_ORDER_LIST:
            return [];
        case CHANGE_ORDER_LIST:
            return [];
        default:
            return state;

    }
}

export { orderList }