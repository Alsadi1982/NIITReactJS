import React from 'react';


class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            counter: '',
            num1: '',
            num2: ''
        }
    }

    firstNum = (e) => {
        this.setState({
            num1: e.target.value
        });
    }

    secondNum = (e) => {
        this.setState({
            num2: e.target.value
        });
    }

    click = () => {
        this.setState({
            counter: Number(this.state.num1) + Number(this.state.num2)
        });
    }

    render () {
        return (
            <div>
                <p>
                    <a href="https://github.com/Alsadi1982/NIITReactJS/tree/master/Calculator">
                        Calculator on GitHub
                    </a>
                </p>
                <input value={this.state.num1} onChange={this.firstNum} type="number" />
                <button onClick={this.click}>+</button>
                <input value={this.state.num2} onChange={this.secondNum} type="number"/>
                <div>={this.state.counter}</div>

            </div>
        );
    }
}

export default Calculator;
