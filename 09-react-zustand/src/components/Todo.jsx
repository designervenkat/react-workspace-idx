/* eslint-disable react/prop-types */
// src/Todo.js
import { useState } from 'react'
import useStore from './../zustand/store'
import { Trash2, Save, Edit2 } from 'lucide-react'

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(todo.text)
    const updateTodo = useStore((state) => state.updateTodo)
    const removeTodo = useStore((state) => state.removeTodo)

    const handleUpdate = () => {
        updateTodo(todo.id, { ...todo, text: newText })
        setIsEditing(false)
    }

    return (
        <div className="flex items-center gap-3 my-4">
            {isEditing ? (
                <input
                    className="bg-gray-200 rounded border border-gray-700  text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <div className="flex-1 text-slate-800 bg-slate-300 px-3 py-2">
                    {todo.text}
                </div>
            )}
            <button
                onClick={() => {
                    if (isEditing) {
                        handleUpdate()
                    } else {
                        setIsEditing(true)
                    }
                }}
                className={`${
                    isEditing ? 'bg-green-500' : 'bg-orange-500'
                } text-white border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded text-md`}
            >
                {isEditing ? (
                    <Save className="w-4  text-green-200" />
                ) : (
                    <Edit2 className="w-4 text-orange-200" />
                )}
            </button>

            <button
                onClick={() => removeTodo(todo.id)}
                className="text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                <Trash2 className="w-4" />
            </button>
        </div>
    )
}

export default Todo
