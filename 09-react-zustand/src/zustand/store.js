// src/store.js
import { create } from 'zustand'

const useStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    updateTodo: (id, updatedTodo) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? updatedTodo : todo
            ),
        })),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}))

export default useStore
