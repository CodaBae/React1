import './App.css';
import { useState, useEffect } from "react"
import Counter from './components/Counter'

function App() {
  //state
  let [count, setCount] = useState(0)

  let [toggle, setToggle] = useState(false)

  let [display, setDisplay] = useState(true)


  // freedom, it call all the time something happens. independent.
  useEffect(() => {
    console.log('checking...')
  })


  // runs only once, when the component has mounted
  useEffect(() => {
    console.log('mounting...')
  }, [])


  // will run only when the count state is updated.
  useEffect(() => {
    console.log('updating based on count...')
  }, [count])


  const addCount = () => {
    setCount(count + 1)
  }

  const minusCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const hide = () => {
    setToggle(false)
  }

  const show = () => {
    setToggle(true)
  }

  const updateDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className="container">
      <div>
        <Counter count={count} />

        <button onClick={addCount}>Click here to add to count</button>
        <button onClick={minusCount}>Click here to munis from count</button>
        <button onClick={resetCount}>Click here to reset count</button>
      </div>

      <br />
      <br />

      {
        display ? <><p>Lorem Ipsum is simply dummy text of the printing and  </p>       <button onClick={updateDisplay}>{display ? 'Read more' : 'Read less'}</button>
        </> :
          <> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>       <button onClick={updateDisplay}>{display ? 'Read more' : 'Read less'}</button> </>

      }

    </div>
  );
}

export default App;
