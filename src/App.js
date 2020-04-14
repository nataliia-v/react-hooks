import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevState => prevState + 1);
    };

  return (
    <div className="App">
      <button onClick={handleClick}>I was clicked {count} times</button>
    </div>
  );
}

export default App;
