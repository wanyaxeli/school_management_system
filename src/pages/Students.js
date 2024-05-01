import React from 'react'
import { useNavigate } from 'react-router'
export default function Students() {
    const navigate=useNavigate()
    const handleAddStudent=()=>{
        navigate('/addstudents')
    }
  return (
    <div className='studentsWrapper'>
       <div className='studentcard1'>
        <h4>view all students</h4>
        <i className="fa fa-eye" aria-hidden="true"></i>
       </div>
       <div className='studentcard1 addStudent' onClick={handleAddStudent}>
       <h4>add student</h4>
       <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 approveStudent'>
        <h4>approve student</h4>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 deleteStudent'>
        <h4>delete student</h4>
        <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
    </div>
  )
}
