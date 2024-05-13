import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function Subject() {
    const [name,setName]=useState()
    const [data,setData]=useState([])
    const [res,setRes]=useState()
    const url='http://127.0.0.1:8000/subjects/'
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleAddSubjects=(e)=>{
     e.preventDefault()
     axios.post(url,{name:name})
     .then(res=>{
        setRes(res.data)
        GetSubjects()
     })
     .catch(error=>console.log(error))
    }
    function GetSubjects(){
    axios.get(url)
    .then(res=>{
        setData(res.data)
    })
    .catch(error=>console.log(error))
    }
    useEffect(()=>{
    GetSubjects()
    },[])
    console.log('data',data)
  return (
    <div className='classesWrapper subjectWrapper'>
        <h3>subjects</h3>
        <div className='classFormWrapper subjectFormContainer'>
          <form>
            <table>
                <tbody>
                    <tr>
                        <td>subject name</td>
                        <td><input value={name} onChange={handleChange} type='text'/></td>
                    </tr>
                </tbody>
            </table>
            <div className='subjectBtnWrapper'>
                <button onClick={handleAddSubjects}>add</button>
                <button>delete</button>
            </div>
          </form>
          {res?<p style={{textAlign:'left',color:'red',textTransform:'capitalize',padding:10,paddingBottom:0}}>{res}</p>:''}
        </div>
        <div className='classContainer subjectContainer'>
            <table>
                <thead>
                    <tr>
                        <th>class name</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map(item =>{
                    return (
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
