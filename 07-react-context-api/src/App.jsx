import { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import { ThemeProvider } from './contexts/theme-context/ThemeContext'
import Login from './components/Login'
import AuthProviderContext from './contexts/auth-context/AuthProviderContext'
import Profile from './components/Profile'
import User from './components/User'

function App() {
    const [themeMode, setThemeMode] = useState('light')

    const darkTheme = () => {
        setThemeMode('dark')
    }
    const lightTheme = () => {
        setThemeMode('light')
    }

    // Theme change function
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <AuthProviderContext>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <Header />
                <Profile />
                <Login />

                <User />
            </ThemeProvider>
        </AuthProviderContext>
    )
}

export default App
