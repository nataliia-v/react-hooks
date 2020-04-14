import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setCount(prevState => prevState + 1);
    };

    const handleChangeLight = () => {
      setIsOn(prevState => !prevState)
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
    </div>
  );
}

export default App;
