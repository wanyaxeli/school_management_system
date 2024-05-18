import React,{useState,useEffect} from 'react'
import admin from "../assets/admin.png"
import { useLocation } from 'react-router-dom'
export default function TeacherDetails() {
    const [data,setData]=useState([])
    const location =useLocation()
    useEffect(()=>{
     const data=location.state
     setData([data])
    },[])
    console.log('data',data)
  return (
    <div className='StudentDetailsWrapper'>
            <div className='StudentFeeDatailsImgWrapper'>
                <div className='StudentFeeDatailsImg'>
                    <img src={admin}/>
                </div>
            </div>
         {data!=undefined?
         data.map(item=>{
            return(
            <div key={item.id} className='StudentFeeDatailsContainer'>
            <table>
                <tbody>
                    <tr>
                        <td>Teacher No</td>
                        <td>{item.employeeNo}</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>{item.first_name} {item.middle_name} {item.last_name}</td>
                    </tr>
                    <tr>
                        <td>Identity Card</td>
                        <td>{item.identity}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{item.email}</td>
                    </tr>
                    <tr>
                        <td>phone No</td>
                        <td>0{item.phone_number}</td>
                    </tr>
                    <tr>
                        <td>subjects</td>
                        <td>{item.subjects}</td>
                    </tr>
                </tbody>
            </table>
         </div>
            )
         })
         :<p>loading</p>}
    </div>
  )
}
