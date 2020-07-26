import React from 'react';
import List from "../../../components/List/List";

class Example extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {(this.props.match.params.number) === 'todo' && <List/> }
                {(this.props.match.params.number) === 'calc' && <div>калькулятор</div>}

            </div>


        )
    }
}

export default Example;
