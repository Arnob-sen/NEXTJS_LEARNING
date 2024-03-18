"use client"
import React from 'react'

import { useState } from 'react'
const ClientPage = () => {
  
  const [count,setCount] = useState(0);
  return (
    <div>
    <h1  className='text-7xl font-bold mb-4'>{count}</h1>
    <button onClick={()=> setCount(c => c + 1)} className='btn btn-primary'>
      Incrase
    </button>
    </div>
  )
}

export default ClientPage
