import React,{useState} from 'react'
import logo from '../assets/kaps.jpg'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function CreateAccount() {
  const navigate =useNavigate()
  const initiaState={
    name:'',
    email:'',
    phone_number:'',
    password:'',
    confirm_password:''
  }
  const [values,setValues]=useState(initiaState)
  const [error,setError]=useState()
  const [res,setRes]=useState()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:value})
  }
  const handleCreate=(e)=>{
  e.preventDefault()
  if (values.name ===''|values.email===''|values.phone_number===''|values.password===''|values.confirm_password===''){
    setError('fill all inputs with values')
  }else{
    
  
  const {name}=values
  const first_name=name.split(' ')[0]
  const last_name=name.split(' ')[1]
  const newData={...values,first_name:first_name,last_name:last_name}

  const url='http://127.0.0.1:8000/user/'
  axios.post(url,{data:newData})
  .then(res=>{
    console.log(res.data)
    const data=res.data
    setError(data.error)
    setRes(data.success)
    navigate('/login/signUp')
  })
  .catch(error=>{
    console.log(error)
  })
  }
  }

  return (
    <div className='CreateAccountWrapper'>
       <div className='schoolLogo'>
                <div className='logoContainer'>
                    <img src={logo}/>
                </div>
            </div>
            <div className='loginHeader'>
                <h3>create account</h3>
            </div>
            {error && <div className='errorWrapper'>
              <p>{error}</p>
            </div>}
            <div className='loginFormWrapper'>
            <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td><input value={values.name}  name='name' onChange={handleChange} type='text'/></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input value={values.email} name='email' onChange={handleChange} type='email'/></td>
                            </tr>
                            <tr>
                                <td>phone number</td>
                                <td><input value={values.phone_number} name='phone_number' onChange={handleChange} type='text'/></td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td><input value={values.password} name='password' onChange={handleChange} type='password'/></td>
                            </tr>
                            <tr>
                                <td>confirm password</td>
                                <td><input value={values.confirm_password} name='confirm_password' onChange={handleChange} type='password'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleCreate}>create </button>
                </form>
                <p>Already  have an account <span><Link to='/login/signUp'>sign in</Link></span> </p>
            </div>
    </div>
  )
}
