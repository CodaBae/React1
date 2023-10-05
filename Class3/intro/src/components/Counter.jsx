const Counter = (props) => {


   let x = props.count
   x = x + 5
    return (
        <div>
            <h1>Count: {x}</h1>
        </div>
    )
}

export default Counter