import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context/AuthContext'

export default function Profile() {
    const { user } = useContext(AuthContext)

    if (!user) return <div>Please Login</div>
    return (
        <div>
            <h2>Profile Component </h2>
            Welcome {user.username} || {user.email}
        </div>
    )
}
