import './App.css';
import { useState } from "react"
import Counter from './components/Counter'

function App() {
  //state
  let [count, setCount] = useState(0)

  let [userName, setUserName] = useState('')

  const addCount = () => {
    setCount(count + 1)
  }

  const minusCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <Counter count={count}/>

      <button onClick={addCount}>Click here to add to count</button>
      <button onClick={minusCount}>Click here to munis from count</button>
      <button onClick={resetCount}>Click here to reset count</button>

    </div>
  );
}

export default App;
