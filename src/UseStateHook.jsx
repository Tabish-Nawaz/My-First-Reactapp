import { useState, useEffect } from 'react';

function UseStateHook() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem('count')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const updateCount = (value) => {
    const newCount = Math.max(0, count + value);
    setCount(newCount);
    if (newCount === 10 || newCount === 0) {
      alert(`Your Value is ${newCount}`);
      console.log(`Your Value is ${newCount}`);
      
    }
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => updateCount(1)}>Increase</button>
      <button style={{ marginLeft: 10 }} onClick={() => updateCount(-1)}>Decrease</button>
      <button style={{ marginLeft: 10 }} onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default UseStateHook;