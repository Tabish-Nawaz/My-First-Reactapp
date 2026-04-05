import {useState, useEffect} from 'react'

function Theme() {
    const [color, setColor] = useState("")

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

  return (
    <>
        <button onClick={() => setColor("#1F2937")}>Dark Mode</button>
        <button onClick={() => setColor("#FFFFFF")}>Light Mode</button>
    </>
  )
}

export default Theme