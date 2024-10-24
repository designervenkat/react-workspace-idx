import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/auth-context/AuthContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const { setUser } = useContext(AuthContext)

    const handleLogin = () => {
        setUser({ username, email, password })
    }

    return (
        <div className="w-[720px] rounded-md border dark:border-slate-800 my-6 max-w-screen-md mx-auto p-10">
            <h2>Login - </h2>
            <input
                className="block my-4 h-12 w-72 px-4 py-2"
                type="text"
                placeholder="enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="block my-4 h-12 w-72 px-4 py-2"
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="block my-4 h-12 w-72 px-4 py-2"
                type="text"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="block my-4 h-12 w-72 px-4 py-2 bg-slate-800 text-slate-50"
                type="button"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
