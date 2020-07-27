import { ADD_TO_ORDER_LIST } from '../actions/addToOrderList'

const addToOrderList = (name) => ({type: ADD_TO_ORDER_LIST, payload:{name}});

export { addToOrderList }