import React from 'react'
import worker from '../assets/admin.png'
import SearchBar from '../components/SearchBar'
export default function Workers() {
  return (
    <div className='teacherWrapper'>
        <h3>Employee registration</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>employee's name</td>
                            <td><input type='text'/></td>
                            <td>ID number</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>    
                            <td>gender</td>
                            <td><input type='text'/></td>
                            <td>DOB</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>phone number</td>
                            <td><input type='text'/></td>
                            <td>email</td>
                            <td><input type='email'/></td>
                        </tr>
                        <tr>
                            <td>date of appointment</td>
                            <td><input type='text'/></td>
                            <td>employee work</td>
                            <td><input type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>register</button>
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
