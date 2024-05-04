import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AddStudents from '../pages/AddStudents'
import AllStudents from '../pages/AllStudents'
import Classes from '../pages/Classes'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Staff from '../pages/Staff'
import Students from '../pages/Students'
import Subject from '../pages/Subject'
import Teachers from '../pages/Teachers'
import Workers from '../pages/Workers'
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='' element={<Home/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route index element={<Dashboard/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/addstudents' element={<AddStudents/>}/>
            <Route path='/allstudents' element={<AllStudents/>}/>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/subject' element={<Subject/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/teachers' element={<Teachers/>}/>
            <Route path='/workers' element={<Workers/>}/>
        </Route>
    </Routes>
  )
}
