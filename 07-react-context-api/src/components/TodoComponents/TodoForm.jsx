import React, { useState } from 'react'
import useTodo from '../../contexts/todo-context/TodoContext'

export default function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo('')
    }
    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo Title..."
                className="bg-slate-700 text-white rounded-l-sm px-3 py-1 h-12 flex-1 outline-none focus:ring-0"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 min-w-32 font-medium"
            >
                Add
            </button>
        </form>
    )
}
