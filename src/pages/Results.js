import React from 'react'
import { useNavigate } from 'react-router'
export default function Results() {
    const navigate=useNavigate()
    const handleToResults=()=>{
        navigate('/home/Allresults')
    }
    const handleToClassResults=()=>{
        navigate('/home/classResults')
    }
    const handleAddResults=()=>{
        navigate('/home/AddResults')
    }
    const handleEditResults=()=>{
        navigate('/home/editResults')
    }
  return (
    <div className='studentsWrapper students'>
    <div className='studentcard1' onClick={handleToResults}>
     <h4>view all results</h4>
     <i className="fa fa-eye" aria-hidden="true"></i>
    </div>
    <div className='studentcard1 addStudent' onClick={handleToClassResults}>
    <h4>view class results</h4>
    <i className="fa fa-eye" aria-hidden="true"></i>
     </div>
     <div className='studentcard1 approveStudent' onClick={handleAddResults}>
     <h4>add results</h4>
     <i className="fa fa-check-circle" aria-hidden="true"></i>
     </div>
     <div className='studentcard1 editResults' onClick={handleEditResults}>
     <h4>edit results</h4>
     <i className="fa fa-wrench" aria-hidden="true"></i>
     </div>
 </div>
  )
}
