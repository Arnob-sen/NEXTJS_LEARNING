'use client'
import React from 'react'

const error = (error) => {
  return (
    <div>
      there is an error {error.error.message}
    </div>
  )
}

export default error
