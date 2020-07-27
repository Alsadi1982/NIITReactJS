import React from "react";
import { connect } from 'react-redux'
import { addToOrderList } from '../../store/actionCreators/add'
import { changeOrderList} from "../../store/actionCreators/change";
import { deleteOrderList} from "../../store/actionCreators/delete";
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => {
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
            itemName: '',
            editIndex: null
        }
    }

    closeEdit = ()=>(
        this.setState({ editIndex: null})
    );


    render() {
        const { orderList, addToOrderList, changeOrderList, deleteOrderList} = this.props;
        return(
            <div>
                <p>
                    <a href="https://github.com/Alsadi1982/NIITReactJS/tree/master/todo">
                        ToDoList on GitHub
                    </a>
                </p>
                <div>
                <input
                    value={this.state.itemName}
                    onChange={(e)=>(this.setState({itemName: e.target.value}))}/>
                <button onClick={()=>addToOrderList(this.state.itemName)}>Добавить</button>
                {orderList.map((item, index) => (
                    <div key={item.id}
                         style={{
                             display: 'flex',
                             flexDirection: 'row',
                             alignItems: 'center'
                         }}>
                        <div>
                        {item.name}
                            {(index === this.state.editIndex) &&
                            <form onSubmit={this.closeEdit}>
                                <input
                                    value={item.name}
                                    onChange={(e)=>(changeOrderList(e.target.value, index))}
                                    onBlur={this.closeEdit}/>
                            </form>
                            }
                        </div>
                        <div style={{marginLeft: 10}}>
                            <button  onClick={()=>deleteOrderList(index)}>Удалить</button>
                        </div>
                        <div style={{marginLeft: 10}}>
                            <button  onClick={()=>this.setState({ editIndex: index})}>Изменить</button>
                        </div>
                    </div>))}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);