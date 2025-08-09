import { Navigate } from 'react-router'

import useRole from '../Hooks/useRole'
import Spinner from '../Shared/Spinner'


const StudentRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  console.log('I was here, in StudentRoute')
  if (isRoleLoading) return Spinner
  if (role === 'student') return children
  return <Navigate to='/' replace='true' />
}

export default StudentRoute
