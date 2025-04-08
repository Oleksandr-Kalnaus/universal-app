import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, registerUser, logoutUser } from '../store/slices/auth.slice'

export const useAuth = () => {
    const { user, token, status, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        // Auto-login logic if token exists
    }, [])

    return {
        user,
        token,
        isAuthenticated: !!token,
        isLoading: status === 'loading',
        error,
        login: (credentials) => dispatch(loginUser(credentials)),
        register: (userData) => dispatch(registerUser(userData)),
        logout: () => dispatch(logoutUser()),
    }
}