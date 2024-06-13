import React from 'react'
import { useNavigate } from 'react-router'
export default function Staff() {
    const navigate=useNavigate()
    const handleToTeachers=()=>{
        navigate('/home/teachers')
    }
    const handleToWorkers=()=>{
       navigate('/home/workers')
    }
  return (
    <div className='studentsWrapper staffWrapper'>
        <div  className='studentcard1' onClick={handleToTeachers}>
        <h4>view all teachers</h4>
        <div className='staffTotalWrapper'>
        <i className="fa fa-eye" aria-hidden="true"></i>
        <span>total: 200</span>
        </div>
        </div>
        <div className='studentcard1 addStudent' onClick={handleToWorkers}>
        <h4>view all workers</h4>
        <div className='staffTotalWrapper'>
        <i className="fa fa-eye" aria-hidden="true"></i>
        <span>total: 200</span>
        </div>
        </div>
 </div>
  )
}
