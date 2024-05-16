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
    const [res,setRes]=useState('')
    const handleChange=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleRegister=(e)=>{
    e.preventDefault()
    const {studentName,parentName}=data
    const first_name=studentName.split(' ')[0]
    const last_name=studentName.split(' ')[2]
    const middle_name=studentName.split(' ')[1]
    const parent_first_name=parentName.split(' ')[0]
    const parent_last_name=parentName.split(' ')[1]
    const mergedData={last_name:last_name,middle_name:middle_name,first_name:first_name,parent_first_name:parent_first_name,parent_last_name:parent_last_name}
    const newData={...data,...mergedData}
    console.log(data)
    try{
        const url='http://127.0.0.1:8000/student/'
        axios.post(url,newData,{
         headers:{'Content-Type':'Application/json'}
        })
        .then(res=>{
         console.log(res.data)
         setRes(res.data)
         setData(initialState)
        }) 
        .catch(error=>console.log(error))
    }catch(error){
        console.log(error)
    }
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
                        <td><input value={data.regNo} name='regNo' onChange={handleChange} type='text' /></td>
                        <td>student name</td>
                        <td><input value={data.studentName} name='studentName' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                       <td>D.O.B</td>
                        <td><input value={data.dob} name='dob' onChange={handleChange} type='date' /></td>
                       <td>Class</td>
                        <td><input value={data.class} name='class' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Stream</td>
                        <td><input value={data.stream} name='stream' onChange={handleChange} type='text' /></td>
                        <td>parent/guardian name</td>
                        <td><input value={data.parentName} name='parentName' onChange={handleChange} type='text' /></td>
                    </tr>
                    <tr>
                        <td>parent/guardian phone number</td>
                        <td><input value={data.phone_number} name='phone_number' onChange={handleChange} type='text' /></td>
                    </tr>
                </tbody>
            </table>
        <div className='registerBtnWrapper'>
            <button onClick={handleRegister}>Register</button>
        </div>
        </form>
        </div>
        <div>
            {res?<p style={{color:'red',textTransform:'capitalize'}}>{res}</p>:''}
        </div>
    </div>
  )
}
