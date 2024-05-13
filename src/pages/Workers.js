import axios from 'axios'
import React,{useEffect,useState} from 'react'
import worker from '../assets/admin.png'
import SearchBar from '../components/SearchBar'
export default function Workers() {
    const initialState={
        name:'',
        id:'',
        gender:'',
        dob:'',
        phone_number:'',
        email:'',
        date_of_appointment:'',
        work:''
    }
    const [values,setValues]=useState(initialState)
    const handleChange=(e)=>{
     const{name,value}=e.target
     setValues({...values,[name]:value})
    }
    const handleRegister=(e)=>{
        e.preventDefault()
        const{name}=values
        const first_name=name.split(' ')[0]
        const last_name=name.split(' ')[1]
        const groupedData={first_name:first_name,last_name:last_name}
        const newData={...values,...groupedData}
        const url='http://127.0.0.1:8000/worker/'
        axios.post(url,newData)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
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
                            <td>DOB</td>
                            <td><input onChange={handleChange} name='dob' type='date'/></td>
                        </tr>
                        <tr>
                            <td>phone number</td>
                            <td><input onChange={handleChange} name='phone_number' type='text'/></td>
                            <td>email</td>
                            <td><input onChange={handleChange} name='email' type='email'/></td>
                        </tr>
                        <tr>
                            <td>date of appointment</td>
                            <td><input onChange={handleChange} name='date_of_appointment' type='date'/></td>
                            <td>employee work</td>
                            <td><input onChange={handleChange} name='work' type='text'/></td>
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
        <div>
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
                    <img src={worker}/>
                    </div>   
                    </td>
                    <td>elias wanyama</td>
                    <td>42846498</td>
                    <td>male</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td>cook</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={worker}/>
                    </div>  
                    </td>
                    <td>elias wanyama</td>
                    <td>42846498</td>
                    <td>male</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td>driver</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={worker}/>
                    </div>  
                    </td>
                    <td>elias wanyama</td>
                    <td>42846498</td>
                    <td>male</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td>watchman</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={worker}/>
                    </div>  
                    </td>
                    <td>elias wanyama</td>
                    <td>42846498</td>
                    <td>male</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td>secritary</td>
                    <td><button>view</button></td>
                </tr>
            </tbody>
           </table>
        </div>
        </div>
    </div>
  )
}
