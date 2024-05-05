import React from 'react'
import teacher from '../assets/admin.png'
export default function AllExpenses() {
  return (
    <div className='allFeeRecordWrapper'>
    <div className='allfeeRecordContainer'>
        <h3>Accounts</h3>
        <div className='feeSearchWrapper'>
          <form>
            <table>
                <tbody>
                    <tr>
                        <td><input type='search' placeholder='enter name ..'/></td>
                        <td><input type='search' placeholder='enter expense..'/></td>
                        <td><input type='search' placeholder='enter amount'/></td>
                        <td><button>search</button></td>
                    </tr>
                </tbody>
            </table>
          </form>
        </div>
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
                <th>name</th>
                <th>expense type</th>
                <th>amount</th>
                <th>phone number</th>
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
                <td>elias wanyama</td>
                <td>beans</td>
                <td>20000</td>
                <td>0795962808</td>
                <td><span>paid</span></td>
                <td><button>view</button></td>
            </tr>
            <tr>
                <td>
                <div className='studentImgWrapper'>
                <img src={teacher}/>
                </div>  
                </td>
                <td>elias wanyama</td>
                <td>beans</td>
                <td>20000</td>
                <td>0795962808</td>
                <td><span>paid</span></td>
                <td><button>view</button></td>
            </tr>
            <tr>
                <td>
                <div className='studentImgWrapper'>
                <img src={teacher}/>
                </div>  
                </td>
                <td>elias wanyama</td>
                <td>beans</td>
                <td>20000</td>
                <td>0795962808</td>
                <td><span>paid</span></td>
                <td><button>view</button></td>
            </tr>
            <tr>
                <td>
                <div className='studentImgWrapper'>
                <img src={teacher}/>
                </div>  
                </td>
                <td>elias wanyama</td>
                <td>beans</td>
                <td>20000</td>
                <td>0795962808</td>
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
