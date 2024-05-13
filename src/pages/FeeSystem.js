import axios from 'axios'
import React,{useState} from 'react'

export default function FeeSystem() {
    const initialState={
        classFee:'',
        totalAmount:'',
        term_one: '',
        term_two: '',
        term_three: ''
    }
    const[data,setData]=useState(initialState)
    const handleChange=(e)=>{
    const{name,value}=e.target
    setData({...data,[name]:value})
    }
    const handleToCreate=(e)=>{
    e.preventDefault()
    const url='http://127.0.0.1:8000/feeSystem/'
    axios.post(url,data)
    .then(res=>{console.log(res.data)})
    .catch(error=>console.log(error))
    }
  return (
    <div className='classesWrapper'>
    <h3>school fees system</h3>
    <div className=' feeStystemWrapper'>
      <form>
        <table>
            <tbody>
                <tr>
                    <td>class name</td>
                    <td><input onChange={handleChange} name='classFee' type='text'/></td>
                    <td>term one</td>
                    <td><input onChange={handleChange} name='term_one' type='text'/></td>
                </tr>
                <tr>
                    <td>term two</td>
                    <td><input onChange={handleChange} name='term_two' type='text'/></td>
                    <td>term three</td>
                    <td><input onChange={handleChange} name='term_three' type='text'/></td>
                </tr>
                <tr>
                    <td>total amount</td>
                    <td  className='lastrow'><input onChange={handleChange} name='totalAmount' type='text'/></td>
                </tr>
            </tbody>
        </table>
        <div>
            <button className='feeStystemBtn' onClick={handleToCreate}>create</button>
        </div>
      </form>
    </div>
    <div className='classContainer feeSystemContainer'>
        <table>
            <thead>
                <tr>
                    <th>class name</th>
                    <th>term one</th>
                    <th>term two</th>
                    <th>term three</th>
                    <th>total amount</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
