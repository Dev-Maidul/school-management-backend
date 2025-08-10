import { Navigate } from 'react-router'

import useRole from '../Hooks/useRole'
import Spinner from '../Shared/Spinner'


const SupervisorRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  console.log('I was here, in Supervisor')
  if (isRoleLoading) return Spinner
  if (role === 'supervisor') return children
  return <Navigate to='/' replace='true' />
}

export default SupervisorRoute;
