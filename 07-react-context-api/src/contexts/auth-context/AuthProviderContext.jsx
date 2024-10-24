import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProviderContext = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviderContext
