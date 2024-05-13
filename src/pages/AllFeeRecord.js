import React,{useState} from 'react'
import teacher from '../assets/admin.png'
import { Link,useNavigate } from 'react-router-dom'
export default function AllFeeRecord() {
    const initialState={
        regNo:'',
        name:'',
        term:'',
        amount:'',
        teller:'',
        date:'',
    }
    const[data,setData]=useState()
    const navigate=useNavigate()
    const handleToSchoolFeeSytem=()=>{
    navigate('/feesystem')
    }
  return (
    <div className='allFeeRecordWrapper'>
        <div className='allfeeRecordContainer'>
            <h3>Accounts</h3>
            <div className='feeSearchWrapper'>
              <form>
                <table>
                    <tbody>
                        <tr>
                            <td><input type='search' placeholder='enter admission ..'/></td>
                            <td><input type='search' placeholder='enter name..'/></td>
                            <td><input type='search' placeholder='enter class'/></td>
                            <td><button>search</button></td>
                        </tr>
                    </tbody>
                </table>
              </form>
            </div>
            <div><span className='feelink' onClick={handleToSchoolFeeSytem}>school fee system</span></div>
        </div>
        <div>
        <div className='teacherDetailHeader'>
            <h5>student's details</h5>
        </div>
        <div className='teacherContainer'>
           <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>admin no</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>class</th>
                    <th>amount</th>
                    <th>status</th>
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
                    <td>2</td>
                    <td>20000</td>
                    <td><span>paid</span></td>
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
                    <td>3</td>
                    <td>30000</td>
                    <td><span>paid</span></td>
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
                    <td>4</td>
                    <td>40000</td>
                    <td><span>paid</span></td>
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
                    <td>4</td>
                    <td>4000</td>
                    <td><span>paid</span></td>
                    <td><button>view</button></td>
                </tr>
            </tbody>
           </table>
        </div>
        </div>
    </div> 
  )
}
