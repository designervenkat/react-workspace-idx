import useStore from './../zustand/store'
import Todo from './Todo'

const TodoList = () => {
    const todos = useStore((state) => state.todos)

    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList
