import Header from "../components/Header"
import '../styles/Todo.css'
import Button from '../components/Button'
import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"

const Todo = () => {
    return (
        <div id="todo_container">
            <Header />
            <div >
                <AddTodo />
            </div>
            <TodoList />

        </div>
    )
}

export default Todo