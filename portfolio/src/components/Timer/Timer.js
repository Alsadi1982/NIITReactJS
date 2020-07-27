import React from 'react';

class Timer extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            time: this.msToTime(0),
            timerID: null,
            results: []
        };
        this.timerStep = 10;
    }

    msToTime(s){
        const ms = s%1000;
        s = (s - ms)/1000;
        const sec = s%60;
        s = (s - sec)/60;
        const min = s%60;
        const hour = (s - min)/60;

        return hour+':'+min+':'+sec+'.'+ms;
    }

    startStopTimer = () =>{
        if (this.state.timerID){
            clearInterval(this.state.timerID);
            this.setState({
                timerID: null,
                results: [...this.state.results, this.state.time]
            });
        }else {
            let ms = this.timerStep;
            const timerID = setInterval(()=>{
                this.setState({
                    time: this.msToTime(ms)
                });
                ms += this.timerStep;
            }, this.timerStep)

            this.setState({
                timerID: timerID
            });
        }
    }

    render(){
        const {timerID, results} = this.state;
        return(
            <div>
                <div>{this.state.time}</div>
                <button onClick={this.startStopTimer}>{timerID?'Остановить':'Запустить'} таймер</button>
                {results.map((item)=>(<div key={item}>{item}</div>))}
            </div>
        )
    }

}

class TimerWrapper extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            flag: true
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
                <button onClick={this.toggleShowTimer}>{this.state.flag ? 'Скрыть' : 'Показать'} таймер</button>
                {this.state.flag && <Timer />}
            </div>

        );
    }
}


export default TimerWrapper;
