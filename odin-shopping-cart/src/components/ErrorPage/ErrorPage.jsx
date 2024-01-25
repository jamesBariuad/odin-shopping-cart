import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div className='text-4xl font-bold'>Page Not Found!</div>
      <br />

       <Link to="/"><div className='text-xl font-semibold text-sky-400'>
        Click here to go back to home page</div></Link>
    </div>

  )
}

export default ErrorPage