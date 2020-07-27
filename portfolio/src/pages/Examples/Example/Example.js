import React from 'react';
import List from "../../../components/List/List";
import HookExample from "../../../components/HookExample";
import Calculator from "../../../components/Calculator";
import MovingBlock from "../../../components/MovingBlock";

class Example extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {(this.props.match.params.number) === 'todo' && <List /> }
                {(this.props.match.params.number) === 'calc' && <Calculator />}
                {(this.props.match.params.number) === 'hookExample' && <HookExample />}
                {(this.props.match.params.number) === 'move' && <MovingBlock />}

            </div>


        )
    }
}

export default Example;
