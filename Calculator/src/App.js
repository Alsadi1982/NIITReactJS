import React from 'react';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 0,
      num1: 0,
      num2: 0
    }
  }


  click = () => {
    this.setState({
    num1: Number(document.getElementById('num1').value),
    num2: Number(document.getElementById('num2').value),
    counter: this.state.num1 + this.state.num2
    });
  }
  render () {
    return (
    <div>
      <input type={Text} id="num1"/>
      <button onClick={this.click}>+</button>
      <input type={Text} id="num2"/>
    <div>={this.state.counter}</div>
    </div>
    );
  }
}

export default App;
