import axios from 'axios'
import React,{useState} from 'react'

export default function AddStudents() {
    const initialState={
        regNo:'',
        studentName:'',
        dob:'',
        class:'',
        stream:'',
        parentName:'',
        phone_number:''
    }
    const [data,setData]=useState(initialState)
    const handleChange=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleRegister=()=>{
    const url='http://127.0.0.1:8000/student'
       axios.post(url,data)
       .then(res=>{
        console.log(res.data)
       }) 
       .catch(error=>console.log(error))
    }
  return (
    <div className='addStudentWrapper'>
        <h2>student registration</h2>
        <div className='studentContainer'>
         <form>
            <table>
                <tbody>
                    <tr>
                        <td>admission number</td>
                        <td><input name='regNo' onChange={handleChange} type='text' /></td>
                        <td>student name</td>
                        <td><input name='studentName' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                       <td>D.O.B</td>
                        <td><input name='dob' onChange={handleChange} type='date' /></td>
                       <td>Class</td>
                        <td><input name='class' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Stream</td>
                        <td><input name='stream' onChange={handleChange} type='text' /></td>
                        <td>parent/guardian name</td>
                        <td><input name='parentName' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                        <td>parent/guardian phone number</td>
                        <td><input name='phone_number' onChange={handleChange} type='text' /></td>
                    </tr>
                </tbody>
            </table>
         </form>
        </div>
        <div className='registerBtnWrapper'>
            <button onClick={handleRegister}>Register</button>
        </div>
    </div>
  )
}
