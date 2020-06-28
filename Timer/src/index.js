import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

let arr = [];


class Timer extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      timerID: ''
    }
  }

  componentDidMount(){
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    arr.push(`${this.state.min}:${this.state.sec}`);
    arr.forEach(item => console.log(item));
  }

  

  tick = () => {
    if (this.state.sec >= 0 && this.state.sec<=59) {
    this.setState({sec: this.state.sec + 1});
    } else {

      this.setState({
        sec: 0,
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
      <List onChange={arr}/>
    </div>
    
    );
  }
}

class List extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      flag: true,
      arr2: []
    }
  }

  recArr = () => {
    
    this.setState(
      {flag: true}
    );
  }

  clearArr = () => {
    arr = [];
    this.setState(
      {flag: false}
    );
  }

    render() {
      return(
        <div>
         {this.state.flag && <div>{arr.map(i => {return (<div >{i}</div> )})}</div>} 
          <button onClick={this.clearArr}>Очистить</button>
          <button onClick={this.recArr}>Записать</button>
        </div>
        
      );
    }
}

  ReactDOM.render(
    <div>
      <Toggle />
    </div>,
      
    document.getElementById('root')
  );


serviceWorker.unregister();
