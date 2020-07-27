import React, { useState, useEffect } from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        function handleResize(){
            const width = window.innerWidth;
            const height = window.innerHeight;

            setSize({width, height});
        }

        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener('resize', handleResize);
    })

    return size;
}

function HookExample(props) {
    const size = useWindowSize();

    const blockWidth = size.width/2;
    const blockHeight = size.height/2;

    return (
        <div style={{
            textAlign: 'center',
            backgroundColor: "#48D1CC",
            margin: '20%',
            weight: `${blockWidth}`,
            height: `${blockHeight}`
        }}>
            <p>windowWidth: {size.width}</p>
            <p>windowHeight: {size.height}</p>
            <p>blockWidth: {blockWidth}</p>
            <p>blockHeight: {blockHeight}</p>
        </div>
    );

}

export default HookExample;