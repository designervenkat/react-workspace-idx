import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
    return (
        <div className="h-screen w-full grid place-content-center bg-slate-900 text-slate-400">
            <h2>React Redux</h2>

            <AddTodo />
            <Todos />
        </div>
    )
}

export default App
