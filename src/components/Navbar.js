/* Tutorial - 4 - Links */
/* Tutorial - 5 - Active Links */
/* Tutorial - 8 - Nested Routes */
/* Tutorial - 15 - Authentication and Protected Routes */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return { 
            fontWeight: isActive ? 'bold' : 'normal' ,
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth()
    
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
        {
          // if the user not exist then show login button
          !auth.user && (<NavLink style={navLinkStyles} to='/login'>Login</NavLink>)
        }
    </nav>
  )
}

export default Navbar

