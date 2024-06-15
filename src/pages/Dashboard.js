import React from 'react'
import admin from "../assets/admin.png"
import student from "../assets/student.png"
import classes from "../assets/classes.png"
import subjects from "../assets/subjects.png"
import results from "../assets/results.png"
import fees from "../assets/fees.png"
import staff from "../assets/staff.png"
import print from "../assets/print.png"
import reset from "../assets/resetpwd.png"
import property from "../assets/property.png"
import { useNavigate } from 'react-router'
export default function Dashboard() {
    const navigate=useNavigate()
    const hadleToStudents=()=>{
     navigate('/home/students')
    }
const handleToClasses=()=>{
    navigate('/home/classes')
}
const handleToSubject=()=>{
    navigate('/home/subject')
}
const handleToStaff=()=>{
    navigate('/home/staff')
}
const handleToFees=()=>{
    navigate('/home/fee')
}
const handleToResults=()=>{
    navigate('/home/results')
}
const handleToProfile=()=>{
    navigate('/home/profile')
}
  return (
    <div className='dashboardWrapper'>
        <div className='card' onClick={handleToProfile}>
            <h4>my profile</h4>
            <div className='cardImgWrapper'>
                <img src={admin}/>
            </div>
        </div>
        <div className='card' onClick={hadleToStudents}>
            <h4>student manager</h4>
            <div className='cardImgWrapper'>
                <img src={student}/>
            </div>
        </div>
        <div className='card' onClick={handleToClasses}>
            <h4>class manager</h4>
            <div className='cardImgWrapper'>
                <img src={classes}/>
            </div>
        </div>
        <div className='card' onClick={handleToSubject}>
            <h4>subject manager</h4>
            <div className='cardImgWrapper'>
                <img src={subjects}/>
            </div>
        </div>
        <div className='card' onClick={handleToResults}>
            <h4>result manager</h4>
            <div className='cardImgWrapper'>
                <img src={results}/>
            </div>
        </div>
        <div className='card' onClick={handleToFees}>
            <h4>Accounts manager</h4>
            <div className='cardImgWrapper'>
                <img src={fees}/>
            </div>
        </div>
        <div className='card' onClick={handleToStaff}>
            <h4>staff manager</h4>
            <div className='cardImgWrapper'>
                <img src={staff}/>
            </div>
        </div>
        <div className='card'>
            <h4>print slip</h4>
            <div className='cardImgWrapper'>
                <img src={print}/>
            </div>
        </div>
        <div className='card'>
            <h4>reset password</h4>
            <div className='cardImgWrapper'>
                <img src={reset}/>
            </div>
        </div>
        <div className='card'>
            <h4>school properties</h4>
            <div className='cardImgWrapper'>
                <img src={property}/>
            </div>
        </div>
    </div>
  )
}
