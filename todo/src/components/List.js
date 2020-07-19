import React from "react";
import store from '../store/store';


class List extends React.Component {
    render() {
        return(
            <div>
                <button onClick={() => (store.dispatch({type: 123}))}>проверка</button>
            </div>
        )
    }
}

export { List}