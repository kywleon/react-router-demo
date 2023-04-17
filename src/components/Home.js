/* Tutorial - 6 - Navigating Programmatically */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary', { replace: true})}>Place Order</button>
    </div>
  )
}

export default Home
