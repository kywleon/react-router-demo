/* Tutorial - 8 - Nested Routes */

import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <div>
            <input type="search" placeholder="='Search products" />
        </div>
        <nav>
          <Link to='featured'>Fetured</Link>
          <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Products
