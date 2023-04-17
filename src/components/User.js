/* Tutorial - 10 - Dynamic Routes */
/* Tutorial - 12 - Search Params */

import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const User = () => {

const [searchParams, setSearchParams] = useSearchParams()
console.log(searchParams.get('filter'))
const showActiveUsers = searchParams.get('filter') === 'active'

  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
            <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        <div>
            {
                showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
        </div>
    </div>
  )
}

export default User
