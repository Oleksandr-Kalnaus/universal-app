import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '../../utils/api/auth.api'
import { storage } from '../../utils/helpers/storage.helpers'

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await authApi.login(email, password)
            storage.setToken(response.data.token)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await authApi.register(userData)
            storage.setToken(response.data.token)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const logoutUser = createAsyncThunk('auth/logout', async () => {
    storage.clearToken()
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: storage.getToken(),
        status: 'idle',
        error: null,
    },
    reducers: {
        clearAuthError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload?.message || 'Login failed'
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload?.message || 'Registration failed'
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.token = null
            })
    },
})

export const { clearAuthError } = authSlice.actions

export default authSlice.reducer