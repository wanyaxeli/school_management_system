import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AddStudents from '../pages/AddStudents'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Students from '../pages/Students'
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='' element={<Home/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route index element={<Dashboard/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/addstudents' element={<AddStudents/>}/>
        </Route>
    </Routes>
  )
}
