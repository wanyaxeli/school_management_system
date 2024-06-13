import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import AddExpense from '../pages/AddExpense'
import AddFeeRecord from '../pages/AddFeeRecord'
import AddResults from '../pages/AddResults'
import AddStudents from '../pages/AddStudents'
import AllExpenses from '../pages/AllExpenses'
import AllFeeRecord from '../pages/AllFeeRecord'
import AllResults from '../pages/AllResults'
import AllStudents from '../pages/AllStudents'
import Classes from '../pages/Classes'
import ClassResults from '../pages/ClassResults'
import CreateAccount from '../pages/CreateAccount'
import Dashboard from '../pages/Dashboard'
import EditResults from '../pages/EditResults'
import Fees from '../pages/Fees'
import FeeSystem from '../pages/FeeSystem'
import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginWrapper from '../pages/LoginWrapper'
import ReportSheet from '../pages/ReportSheet'
import Results from '../pages/Results'
import Staff from '../pages/Staff'
import StudentDetails from '../pages/StudentDetails'
import StudentFeeDatails from '../pages/StudentFeeDatails'
import Students from '../pages/Students'
import Subject from '../pages/Subject'
import TeacherDetails from '../pages/TeacherDetails'
import Teachers from '../pages/Teachers'
import Workers from '../pages/Workers'
import WorkersDetails from '../pages/WorkersDetails'
export default function AppRoutes() {
  return (
    <Routes>
         <Route path='' element={<LoginWrapper/>}>
          <Route index element={<Login/>}/>
           <Route path='/signUp' element={<Login/>}/>
           <Route path='/create' element={<CreateAccount/>}/>
         </Route>
        <Route path='/home' element={<Home/>}>
            <Route path="/home/dashboard" element={<Dashboard/>}/>
            <Route index element={<Dashboard/>}/>
            <Route path='/home/students' element={<Students/>}/>
            <Route path='/home/addstudents' element={<AddStudents/>}/>
            <Route path='/home/allstudents' element={<AllStudents/>}/>
            <Route path='/home/classes' element={<Classes/>}/>
            <Route path='/home/subject' element={<Subject/>}/>
            <Route path='/home/staff' element={<Staff/>}/>
            <Route path='/home/teachers' element={<Teachers/>}/>
            <Route path='/home/workers' element={<Workers/>}/>
            <Route path='/home/fee' element={<Fees/>}/>
            <Route path='/home/allfeeRecords' element={<AllFeeRecord/>}/>
            <Route path='/home/addfeeRecords' element={<AddFeeRecord/>}/>
            <Route path='/home/expenses' element={<AllExpenses/>}/>
            <Route path='/home/addexpense' element={<AddExpense/>}/>
            <Route path='/home/results' element={<Results/>}/>
            <Route path='/home/feesystem' element={<FeeSystem/>}/>
            <Route path='/home/Allresults' element={<AllResults/>}/>
            <Route path='/home/reportSheet' element={<ReportSheet/>}/>
            <Route path='/home/classResults' element={<ClassResults/>}/>
            <Route path='/home/AddResults' element={<AddResults/>}/>
            <Route path='/home/editResults' element={<EditResults/>}/>
            <Route path='/home/studentFeeDetails' element={<StudentFeeDatails/>}/>
            <Route path='/home/studentDetails' element={<StudentDetails/>}/>
            <Route path='/home/teacherDetails' element={<TeacherDetails/>}/>
            <Route path='/home/WorkerDetails' element={<WorkersDetails/>}/>
        </Route>
    </Routes>
  )
}
