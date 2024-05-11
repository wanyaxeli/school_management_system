import React from 'react'
import teacher from '../assets/admin.png'
import SearchBar from '../components/SearchBar'
export default function Teachers() {
  return (
    <div className='teacherWrapper'>
        <h3>Teacher registration</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>teacher number</td>
                            <td><input type='text'/></td>
                            <td>teacher's name</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>    
                            <td>ID number</td>
                            <td><input type='text'/></td>
                            <td>gender</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>teacher number</td>
                            <td><input type='text'/></td>
                            <td>email</td>
                            <td><input type='email'/></td>
                        </tr>
                        <tr>
                            <td>date of appointment</td>
                            <td><input type='text'/></td>
                            <td>subjects</td>
                            <td><textarea/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>register</button>
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
                    <th>reg no</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>id</th>
                    <th>email</th>
                    <th>joining date</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={teacher}/>
                    </div>   
                    </td>
                    <td>c202020/19231</td>
                    <td>elias wanyama</td>
                    <td>male</td>
                    <td>42846498</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={teacher}/>
                    </div>  
                    </td>
                    <td>c202020/19231</td>
                    <td>elias wanyama</td>
                    <td>male</td>
                    <td>42846498</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={teacher}/>
                    </div>  
                    </td>
                    <td>c202020/19231</td>
                    <td>elias wanyama</td>
                    <td>male</td>
                    <td>42846498</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td><button>view</button></td>
                </tr>
                <tr>
                    <td>
                    <div className='studentImgWrapper'>
                    <img src={teacher}/>
                    </div>  
                    </td>
                    <td>c202020/19231</td>
                    <td>elias wanyama</td>
                    <td>male</td>
                    <td>42846498</td>
                    <td>eliwanyax@gmail.com</td>
                    <td>20/5/2006</td>
                    <td><button>view</button></td>
                </tr>
            </tbody>
           </table>
        </div>
        </div>
    </div>
  )
}
