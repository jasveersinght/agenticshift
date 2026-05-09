import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  role: 'student' | 'parent'
  children: React.ReactNode
}

export default function ProtectedRoute({ role, children }: ProtectedRouteProps) {
  const token = localStorage.getItem('as_token')
  const storedRole = localStorage.getItem('as_role')

  if (!token || storedRole !== role) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
