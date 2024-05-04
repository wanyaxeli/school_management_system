import React from 'react'
import { useNavigate } from 'react-router'
export default function Staff() {
    const navigate=useNavigate()
    const handleToTeachers=()=>{
        navigate('/teachers')
    }
    const handleToWorkers=()=>{
       navigate('/workers')
    }
  return (
    <div className='studentsWrapper staffWrapper'>
        <div  className='studentcard1' onClick={handleToTeachers}>
        <h4>view all teachers</h4>
        <i className="fa fa-eye" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 addStudent' onClick={handleToWorkers}>
        <h4>view all workers</h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
 </div>
  )
}
