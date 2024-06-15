import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Header() {
  const location =useLocation()
  const {pathname}=location
  const splitPath=pathname
  console.log('path',pathname)
  return (
    <div className='headerWrapper'>
      {pathname !== '/'&&pathname !== '/signUp' && pathname !== '/create'?<p>header</p>:''}
    </div>
  )
}
