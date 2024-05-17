import React,{useState,useEffect} from 'react'
import student from "../assets/student.png"
import { useLocation } from 'react-router-dom'
export default function StudentDetails() {
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
                    <img src={student}/>
                </div>
            </div>
         {data!=undefined?
         data.map(item=>{
            return(
            <div key={item.id} className='StudentFeeDatailsContainer'>
            <table>
                <tbody>
                    <tr>
                        <td>registration No</td>
                        <td>{item.regNo}</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>{item.first_name} {item.middle_name} {item.last_name}</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>{item.Student_class}{item.stream}</td>
                    </tr>
                    <tr>
                        <td>parent name</td>
                        <td>{item.parent_first_name} {item.parent_last_name}</td>
                    </tr>
                    <tr>
                        <td>parent email</td>
                        <td>none</td>
                    </tr>
                    <tr>
                        <td>parent phone No</td>
                        <td>0{item.parent_phone_number}</td>
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
