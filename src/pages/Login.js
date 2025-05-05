import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello, world!');

  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
