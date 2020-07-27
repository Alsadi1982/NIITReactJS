import { DELETE_FROM_ORDER_LIST } from '../actions/deleteFromOrderList'

const deleteOrderList = (index) => ({type: DELETE_FROM_ORDER_LIST, payload: {index}});

export { deleteOrderList }