import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './assets/styles/theme.scss'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute/ProtectedRoute.jsx'
import Loader from './components/common/Loader/Loader'

const DashboardPage = React.lazy(() => import('./pages/DashboardPage/DashboardPage.jsx'))
const TasksPage = React.lazy(() => import('./pages/TasksPage/TasksPage.jsx'))
const ContactsPage = React.lazy(() => import('./pages/ContactsPage/ContactsPage.jsx'))
const CalendarPage = React.lazy(() => import('./pages/CalendarPage/CalendarPage.jsx'))
const NotesPage = React.lazy(() => import('./pages/NotesPage/NotesPage.jsx'))


function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader fullScreen />}>
          <Routes>
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/notes" element={<NotesPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
  )
}

export default App