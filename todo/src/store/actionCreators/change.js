import { CHANGE_ORDER_LIST } from '../actions/changeOrderList'

const changeOrderList = (name, index) => ({type: CHANGE_ORDER_LIST, payload: {name, index}});

export { changeOrderList }