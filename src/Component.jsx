import { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 10) {
      alert(`Your Value is ${newCount}`);
    }
  }

  function handleDecrease() {
    const newCount = count - 1;
    if (newCount >= 0) {  // prevent negative values
      setCount(newCount);
      if (newCount === 0) {
        alert(`Your Value is ${newCount}`);
      }
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button style={{ marginLeft: 10 }} onClick={handleDecrease}>Decrease</button>
      <button style={{ marginLeft: 10 }} onClick={handleReset}>Reset</button>
    </>
  );
}

export default Component;