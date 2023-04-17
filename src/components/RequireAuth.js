/* Tutorial - 15 - Authentication and Protected Routes */

import React from 'react'
import { useAuth } from './Auth'
import { Navigate , useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth()

    if(!auth.user){
        console.log(location)
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default RequireAuth
