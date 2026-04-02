import { useState } from 'react'

function Component() {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount(count + 1)
        if (count == 5) {
         alert("Value is 5");   
        }
    }
    function handleClick2() {
        setCount(count - 1)
        if (count == 0) {
            confirm("Do you want to decrease counter!")
        }
    }
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Press to + 1</button>
                <button onClick={handleClick2}>Press to - 1</button>
    </>
  )
}

export default Component 