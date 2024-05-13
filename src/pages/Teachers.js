import React,{useEffect, useState} from 'react'
import teacher from '../assets/admin.png'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
export default function Teachers() {
    const initialState={
        teacher_no:'',
        name:'',
        id:'',
        gender:'',
        phone_number:'',
        email:'',
        date_of_appointment:'',
        subjects:''
    }
    const [data,setData]=useState(initialState)
    const [teacher,setTeacher]=useState([])
    const url='http://127.0.0.1:8000/teacher/'
    const handleChange=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
    }
    console.log(data)
    const handleRegister = (e)=>{
    e.preventDefault()
    const {name}=data
    const first_name=name.split(' ')[0]
    const last_name=name.split(' ')[1]
    const groupedData={first_name:first_name,last_name:last_name}
    const newData={...data,...groupedData}
    axios.post(url,newData)
    .then(res=>{
        console.log(res.data)
        setData(initialState)
    })
    .catch(error=>console.log(error))
    }
    function getteachers(){
    axios.get(url)
    .then(res=>{
        setTeacher(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
    } 
    useEffect(()=>{
    getteachers()
    },[])
  return (
    <div className='teacherWrapper'>
        <h3>Teacher registration</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>teacher number</td>
                            <td><input value={data.teacher_no} onChange={handleChange} name='teacher_no' type='text'/></td>
                            <td>teacher's name</td>
                            <td><input value={data.name} onChange={handleChange} name='name' type='text'/></td>
                        </tr>
                        <tr>    
                            <td>ID number</td>
                            <td><input value={data.id} onChange={handleChange} name='id' type='text'/></td>
                            <td>gender</td>
                            <td><input value={data.gender} onChange={handleChange} name='gender' type='text'/></td>
                        </tr>
                        <tr>
                            <td>phone number</td>
                            <td><input value={data.phone_number} onChange={handleChange} name='phone_number' type='text'/></td>
                            <td>email</td>
                            <td><input value={data.email} onChange={handleChange} name='email' type='email'/></td>
                        </tr>
                        <tr>
                            <td>date of appointment</td>
                            <td><input value={data.date_of_appointment} onChange={handleChange} name='date_of_appointment' type='date'/></td>
                            <td>subjects</td>
                            <td><textarea value={data.subjects} onChange={handleChange} name='subjects'/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={handleRegister}>register</button>
                </div>
            </form>
        </div>
        <SearchBar/>
        <h4>All teacher</h4>
        <div>
        <div className='teacherDetailHeader'>
            <h5>teachers details</h5>
        </div>
        <div className='teacherContainer'>
           <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>teacher no</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>id</th>
                    <th>email</th>
                    <th>joining date</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {teacher.map(item=>{
                    return(
                <tr key={item.id}>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={teacher}/>
                    </div>   
                    </td>
                    <td>{item.employeeNo}</td>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{item.gender}</td>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item. date_of_application}</td>
                    <td><button>view</button></td>
                </tr>
                    )
                })}
            </tbody>
           </table>
        </div>
        </div>
    </div>
  )
}
