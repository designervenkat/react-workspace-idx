import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../slices/todo/todoSlice'

export default function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between my-5"
                    >
                        <h2>{todo.text}</h2>
                        <button
                            type="button"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
