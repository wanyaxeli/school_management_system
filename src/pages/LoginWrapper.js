import React from 'react'
import { Outlet } from 'react-router-dom'
export default function LoginWrapper() {
  return (
    <div className='loginWrapper'>
        <Outlet/>
    </div>
  )
}
