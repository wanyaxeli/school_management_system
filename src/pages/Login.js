import React from 'react'
import logo from "../assets/kaps.jpg"
import { Link } from 'react-router-dom'
export default function Login() {
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
                                <td><input type='text'/></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input type='email'/></td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td><input type='password'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button>login</button>
                </form>
                <p>Don't have an account <span><Link to='/login/create'>create</Link></span> </p>
            </div>
         </div>
    </>
  )
}
