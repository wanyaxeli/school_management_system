import axios from 'axios'
import React,{useEffect,useState} from 'react'
import workerImg from '../assets/admin.png'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
export default function Workers() {
    const initialState={
        name:'',
        id:'',
        gender:'',
        employee_earning:'',
        phone_number:'',
        email:'',
        date_of_appointment:'',
        work:''
    }
    const [values,setValues]=useState(initialState)
    const [workers,setWorkers]=useState([])
    const url='http://127.0.0.1:8000/worker/'
    const handleChange=(e)=>{
     const{name,value}=e.target
     setValues({...values,[name]:value})
    }
    const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
        const{name}=values
        const first_name=name.split(' ')[0]
        const last_name=name.split(' ')[1]
        const groupedData={first_name:first_name,last_name:last_name}
        const newData={...values,...groupedData}
        axios.post(url,newData)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
     axios.get(url)
     .then(res=>{
        console.log('workers',res.data)
        const data=res.data.flat()
        setWorkers(data)
     })
     .catch(error=>{
        console.log(error)
     })
    },[])
    const handleWorkerview=(worker)=>{
         navigate('/WorkerDetails',{state:worker})
    }
  return (
    <div className='teacherWrapper'>
        <h3>Employee registration</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>employee's name</td>
                            <td><input onChange={handleChange} name='name' type='text'/></td>
                            <td>ID number</td>
                            <td><input onChange={handleChange} name='id' type='text'/></td>
                        </tr>
                        <tr>    
                            <td>gender</td>
                            <td><input onChange={handleChange} name='gender' type='text'/></td>
                            <td>email</td>
                            <td><input onChange={handleChange} name='email' type='email'/></td>
                        </tr>
                        <tr>
                            <td>phone number</td>
                            <td><input onChange={handleChange} name='phone_number' type='text'/></td>
                            <td>date of appointment</td>
                            <td><input onChange={handleChange} name='date_of_appointment' type='date'/></td>
                        </tr>
                        <tr>
                            <td>employee work</td>
                            <td><input onChange={handleChange} name='work' type='text'/></td>
                            <td>employee's earning</td>
                            <td><input onChange={handleChange} name='employee_earning' type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={handleRegister}>register</button>
                </div>
            </form>
        </div>
         <SearchBar/>
        <h4>All Employees</h4>
         {
            workers!= undefined?
            workers.map(worker=>{
                return(
        <div key={worker.id}>
        <div className='teacherDetailHeader'>
            <h5>employee's details</h5>
        </div>
        <div className='teacherContainer'>
           <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>id</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>joining date</th>
                    <th>type of work</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={workerImg}/>
                    </div>  
                    </td>
                    <td>{worker.first_name} {worker.last_name}</td>
                    <td>{worker.identity}</td>
                    <td>{worker.gender}</td>
                    <td>{worker.email}</td>
                    <td>{worker.date_of_application}</td>
                    <td>{worker.work}</td>
                    <td onClick={()=>handleWorkerview(worker)}><button>view</button></td>
                </tr>
            </tbody>
           </table>
        </div>
        </div>
                )
            })
            :<p>loading</p>
         }
    </div>
  )
}
