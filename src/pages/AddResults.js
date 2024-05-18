import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function AddResults() {
    const initialState={
        regNo:'',
        name:'',
        class:'',
        stream:'',
        subject:'',
        marks:''
    }
    const [values,setValues]=useState(initialState)
    const url='http://127.0.0.1:8000/results/'
    const handleChange=(e)=>{
     const {name,value}=e.target
     setValues({...values,[name]:value})
    }
    const handleRecord=(e)=>{
    e.preventDefault()
    axios.post(url,{values:values})
    .then(res=>{
        console.log(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
    }
  return (
    <div className='addResultsWrapper'>
        <h3>record student's results</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>reg number</td>
                            <td><input onChange={handleChange} name='regNo' type='text'/></td>
                            <td>student's name</td>
                            <td><input onChange={handleChange} name='name' type='text'/></td>
                        </tr>
                        <tr>    
                            <td>class</td>
                            <td><input onChange={handleChange} name='class' type='text'/></td>
                            <td>stream</td>
                            <td><input onChange={handleChange} name='stream' type='text'/></td>
                        </tr>
                        <tr>
                            <td>subject</td>
                            <td><input onChange={handleChange} name='subject' type='text'/></td>
                            <td>marks</td>
                            <td><input onChange={handleChange} name='marks' type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={handleRecord}>record</button>
                </div>
            </form>
        </div>
    </div>
  )
}
