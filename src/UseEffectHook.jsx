import { useState, useEffect } from "react"

function UseEffectHook() {
    const [color, setColor] = useState("color");

    useEffect(() => {
        document.body.style.transition = "background-color 1s ease"
        document.body.style.backgroundColor = color;
    }, [color])

    return (
        <>  
        <button onClick={() => setColor("Red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("Purple")}>Purple</button>
            
        </>
  )
}

export default UseEffectHook

