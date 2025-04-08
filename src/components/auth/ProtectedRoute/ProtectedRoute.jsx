import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../../common/Loader/Loader'

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth)

    if (isLoading) {
        return <Loader fullScreen />
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute