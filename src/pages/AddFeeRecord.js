import axios from 'axios'
import React,{useState} from 'react'
export default function AddFeeRecord() {
    const initialState={
        regNo:'',
        name:'',
        term:'',
        amount:'',
        teller:'',
        date:'',
    }
    const [data,setData]=useState(initialState)
    const handleChange=(e)=>{
    const{name,value}=e.target
    setData({...data,[name]:value})
    }
    const handleSavePayment=(e)=>{
     e.preventDefault()
    const url='http://127.0.0.1:8000/feeSystem/'
     axios.post(url,data)
     .then(res=>res.data)
     .catch(error=>console.log(error))
    }
  return (
    <div className='addfeeRecordWrapper'>
        <h3>fee management</h3>
        <div className='addfeeRecordContainer'>
        <div className='teacherDetailHeader'>
            <h5>payment details</h5>
        </div>
        <div className='recordsContainer'>
            <form>
            <table>
                <tbody>
                    <tr>
                        <td>student reg no</td>
                        <td><input onChange={handleChange} name='regNo' type='type'/></td>
                        <td>student name</td>
                        <td><input onChange={handleChange} name='name' type='type'/></td>
                    </tr>
                    <tr>
                        <td>fee term</td>
                        <td><input onChange={handleChange} name='term' type='type'/></td>
                        <td>amount paid</td>
                        <td><input onChange={handleChange} name='amount' type='type'/></td>
                    </tr>
                    <tr>
                        <td>teller no</td>
                        <td><input onChange={handleChange} name='teller' type='type'/></td>
                        <td>date</td>
                        <td><input onChange={handleChange} name='date' type='date'/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={handleSavePayment}>save fee payment</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}
