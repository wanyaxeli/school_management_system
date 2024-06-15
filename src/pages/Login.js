import React,{useState} from 'react'
import logo from "../assets/kaps.jpg"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const initialState={
        name:'',
        email:'',
        password:''
    }
    const navigate=useNavigate()
    const [values,setValues]=useState(initialState)
    const handleLogin=(e)=>{
    e.preventDefault()
    const url='http://127.0.0.1:8000/api/token/'
    const {email,password}=values
    const data={email:email,password:password}
    axios.post(url,data)
    .then(res=>{
        console.log(res.data)
        const {access}=res.data
        localStorage.setItem('token',access)
        navigate('/home')
    })
    .catch(error=>{
        console.log(error)
    })
    }
    const handleChange=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:value})
    }
  return (
    <>
         <div className='signUpWrapper'>
            <div className='schoolLogo'>
                <div className='logoContainer'>
                    <img src={logo}/>
                </div>
            </div>
            <div className='loginHeader'>
                    <h3>login</h3>
            </div>
            <div className='loginFormWrapper'>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td><input name='name' onChange={handleChange} value={values.name} type='text'/></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input name='email' onChange={handleChange} value={values.email} type='email'/></td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td><input name='password' onChange={handleChange} value={values.password} type='password'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleLogin}>login</button>
                </form>
                <p>Don't have an account <span><Link to='/create'>create</Link></span> </p>
            </div>
         </div>
    </>
  )
}
