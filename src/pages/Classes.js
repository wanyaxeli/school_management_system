import axios from 'axios'
import React ,{useState,useEffect}from 'react'

export default function Classes() {
    const initialState={
        name:'',
        stream:''
    }
    const[values,setValue]=useState(initialState)
    const[data,setData]=useState([])
    const url='http://127.0.0.1:8000/class/'
    const handleChange=(e)=>{
        const{name,value}=e.target
        setValue({...values,[name]:value})
    }
    const handlAddClass=(e)=>{
    e.preventDefault()
    console.log(values)
    axios.post(url,values)
    .then(res=>{
        console.log(res.data)
        getClasses()
        setValue(initialState)
    })
    .catch(error=>{
        console.log(error)
    })
    }
function getClasses(){
    axios.get(url)
    .then(res=>{
       setData(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
}
useEffect(()=>{
getClasses()
},[])
  return (
    <div className='classesWrapper'>
        <h3>Classes</h3>
        <div className='classFormWrapper'>
          <form>
            <table>
                <tbody>
                    <tr>
                        <td>class name</td>
                        <td><input value={values.name} onChange={handleChange} name='name' type='text'/></td>
                        <td>stream name</td>
                        <td><input value={values.stream} onChange={handleChange} name='stream' type='text'/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={handlAddClass}>add</button>
                <button>delete</button>
            </div>
          </form>
        </div>
        <div className='classContainer'>
            <table>
                <thead>
                    <tr>
                        <th>class name</th>
                        <th>class stream</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item=>{
                        return (
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.stream}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
