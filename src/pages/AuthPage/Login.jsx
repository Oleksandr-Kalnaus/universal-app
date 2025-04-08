import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { TextField, Button, Typography, Link } from '@mui/material'
import styles from './Auth.module.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login({ email, password })
        navigate('/')
    }

    return (
        <div className={styles.authContainer}>
            <div className={styles.authForm}>
                <Typography variant="h4" gutterBottom>
                    Вхід
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Пароль"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && (
                        <Typography color="error" className={styles.error}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading ? 'Завантаження...' : 'Увійти'}
                    </Button>
                </form>
                <Typography className={styles.switchAuth}>
                    Ще не маєте акаунта?{' '}
                    <Link href="/register" underline="hover">
                        Зареєструватися
                    </Link>
                </Typography>
            </div>
        </div>
    )
}

export default Login