import '../styles/Todo.css'
import Button from '../components/Button'
import {useState} from 'react'

const AddTodo = () => {

    const [task, setTask] = useState('')

    const handleInput = (event) =>{
        setTask(event.target.value)
    }

    console.log(task)
    return (
        <div id="input_container">
            <div className="AddToDo">
                <input type='text' onChange={(event)=> handleInput(event)} />
            </div>
            <Button />
        </div>

    )
};

export default AddTodo;