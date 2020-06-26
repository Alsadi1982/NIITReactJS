import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class Timer extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      min: 0,
      sec: 0
    }
  }

  componentDidMount(){
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  

  tick = () => {
    if (this.state.sec >= 0 && this.state.sec<=59) {
    this.setState({sec: this.state.sec + 1});
    } else {

      this.setState({
        min: this.state.min + 1
      });
    }
  }

  render() {
    return (
    <div>
      <h1>{this.state.min}:{this.state.sec}</h1>
    </div>
    
    );
  }
}

class Toggle extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      flag: false
    }
  }

  toggleShowTimer = () =>{
    this.setState(
      {flag: !this.state.flag}
    );   
}
  
  render() {
    return (
    <div>
      {this.state.flag && <Timer />}
      <button onClick={this.toggleShowTimer}>Запустить/отключить таймер</button>
    </div>
    
    );
  }
}

  ReactDOM.render(
      <Toggle />,
    document.getElementById('root')
  );


serviceWorker.unregister();
