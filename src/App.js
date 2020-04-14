import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [ mousePosition, setMousePosition ] = useState({x :null, y: null});
    const [status, setStatus ] = useState(navigator.onLine);

    useEffect(() => {
        document.title = `clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [count]);
    const handleClick = () => {
        setCount(prevState => prevState + 1);
    };
    const handleChangeLight = () => {
      setIsOn(prevState => !prevState)
    };
    const handleMouseMove = event => {
        setMousePosition( {
            x: event.pageX,
            y: event.pageY,
        })
    };
    const handleOnline = () => {
        setStatus(true);
    };
    const handleOffline = () => {
        setStatus(false);
    };

    return (
    <div className="App">
        <h2>Counter</h2>
      <button onClick={handleClick}>I was clicked {count} times</button>

        <h2>Toggle light</h2>
        <img
            style={{
            height: "50px",
            width: "50px",
        }}
            onClick={handleChangeLight}
            src={
                isOn
                    ? "https://icon.now.sh/highlight/fd0"
                    : "https://icon.now.sh/highlight/aaa"
            }
        />
        <h2>MousePosition</h2>
        {JSON.stringify(mousePosition, null, 2)}
        <br/>

        <h2>Network status</h2>
        <p>You are <strong>{status ? 'online' : 'offline'}</strong></p>
    </div>
  );
}

export default App;
