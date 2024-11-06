import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import useStore from './../zustand/store'

const AddTodo = () => {
    const [text, setText] = useState('')
    const addTodo = useStore((state) => state.addTodo)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            id: uuidv4(),
            text,
        })
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-100 rounded border border-gray-700 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
