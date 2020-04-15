import React, { useState, useEffect } from 'react';

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
};

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [ mousePosition, setMousePosition ] = useState({x :null, y: null});
    const [status, setStatus ] = useState(navigator.onLine);
    const [{latitude, longitude, speed}, setLocation ] = useState(initialLocationState);
    let mounted = true;

    useEffect(() => {
        document.title = `clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
        const watchId = navigator.geolocation.watchPosition(handleGeolocation);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            navigator.geolocation.clearWatch(watchId);
            mounted = false;
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
    const handleGeolocation = (event) => {
        if (mounted) {
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed
            })
        }
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
        <h2>Geolocation</h2>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
        <p>your speed is {speed ? speed : "0"}</p>
    </div>
  );
}

export default App;
