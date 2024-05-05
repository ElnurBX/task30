import React, { useState } from 'react';

function App() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (

        <div onMouseMove={handleMouseMove} style={{ position:"absolute", height: '100%', width: '100%' }}>

            <div
                style={{
                    transition: 'ease 0.05s',
                    opacity:'0.5    ',
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '2px solid grey',
                    transform: 'translate(-50%, -50%)',
                    zIndex:'100'
                }}
            />
        </div>
    );
}

export default App;
