import React, { useContext } from 'react'

// create context (STORE)
export const ThemeContext = React.createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

// export provider
export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme() {
    return useContext(ThemeContext)
}
