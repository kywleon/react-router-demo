/* Tutorial - 6 - Navigating Programmatically */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div>Order Confirmed!</div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderSummary
