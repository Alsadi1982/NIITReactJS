import React from "react";
import { connect } from 'react-redux'
import { addToOrderList } from '../store/actionCreators/add'
import { changeOrderList} from "../store/actionCreators/change";
import { deleteOrderList} from "../store/actionCreators/delete";
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => {
    console.log(state);
    return {
        orderList: state.orderList
    }
}

const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            addToOrderList: bindActionCreators(addToOrderList, dispatch),
            changeOrderList: bindActionCreators(changeOrderList, dispatch),
            deleteOrderList: bindActionCreators(deleteOrderList, dispatch)
        }
    }
}

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemname: ''
        }
    }


    render() {
        console.log(this.props);
        const { orderList, addToOrderList, changeOrderList, deleteOrderList} = this.props;
        return(
            <div>
                <input
                    value={this.state.itemname}
                    onChange={(e)=>(this.setState({itemname: e.target.value}))}/>
                <button onClick={()=>addToOrderList(this.state.itemname)}>Добавить</button>
                {orderList.map((item, index) => (<div key={item.id}>{item.name}
                <button onClick={()=>deleteOrderList(index)}>Удалить</button>
                    <button>Изменить</button></div>))}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);