/* Tutorial - 10 - Dynamic Routes */
/* Tutorial - 11 - URL Params
 */

import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    // get the params from url
    // way one
   const params = useParams()
   console.log(params)

   const userId = params.userId

//    way two with destructuring
//    const { userId } = userParams()

  return (
    <div>Details about user {userId}</div>
  )
}

export default UserDetails
