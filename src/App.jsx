import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Hello from "./Hello"
import Bye from './Bye'

function App() {

  return (
    <>
      <h1>Hello Component</h1>
      <Hello />
      <img src={reactLogo} width={100} />
      <Bye />
    </>
  )
}

export default App
