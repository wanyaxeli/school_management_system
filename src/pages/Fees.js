import React from 'react'
import { useNavigate } from 'react-router'
export default function Fees() {
    const navigate =useNavigate()
    const handleToFeeCollection=()=>{
    navigate('/home/allfeeRecords')
    }
    const handleAddFeeRecord=()=>{
    navigate('/home/addfeeRecords')
    }
    const handleToExpenses=()=>{
        navigate('/home/expenses')
    }
    const handleToAddExpenses=()=>{
        navigate('/home/addexpense')
    }
  return (
    <div className='studentsWrapper students'>
        <div onClick={handleToFeeCollection} className='studentcard1'>
        <h4> all fee collection</h4>
        <i className="fa fa-eye" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 addStudent' onClick={handleAddFeeRecord}>
        <h4>record fee playment</h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 approveStudent' onClick={handleToExpenses}>
        <h4>all expences</h4>
        <i className="fa fa-eye" aria-hidden="true"></i>
        </div>
        <div className='studentcard1 deleteStudent' onClick={handleToAddExpenses}>
        <h4>record expence</h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
 </div>
  )
}
