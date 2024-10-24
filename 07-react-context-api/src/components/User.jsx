import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context/AuthContext'

export default function User() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            User Component {user && user.username} || {user && user.email}
        </div>
    )
}
