import React from 'react';

const divStyle = {
    position: 'absolute',
    border: '4px solid black',
    width: 600,
    height: 500,
    margin: 10,
    backgroundColor: '#7fffd4'
}


class MovingBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: 10,
            left: 10
        }
    }

    mouseMove = (e) => {
        e.persist();
        this.setState({
            top: e.pageY,
            left: e.pageX
        })
    }

    render() {
        const { top, left} = this.state;
        return (
            <div style={divStyle} onMouseMove={this.mouseMove}>
                <div style={{
                    position: 'absolute',
                    top: `${top}px`,
                    left: `${left}px`,
                    border: '4px solid black',
                    width: 50,
                    height: 50,
                    backgroundColor: '#9932CC'
                }}/>
            </div>
        )
    }
}

export default MovingBlock;
