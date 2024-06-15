import axios from 'axios'
import React,{useEffect,useState} from 'react'
import admin from "../assets/nongender.jpg"
export default function Profile() {
    const token = localStorage.getItem('token')
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    useEffect(()=>{
     const url ='http://127.0.0.1:8000/profile/'
     axios.get(url,{headers:{
        'Authorization':`Bearer ${token}`
     }})
     .then(res=>{
        setLoading(false)
        setData([res.data])
        console.log(res.data)
     })
     .catch(error=>console.log(error))
    },[])
  return (
    <div className='ProfileWrapper'>
       {loading === true ? <p>loading</p>: 
       <>
        <div className='profileImgWrapper'>
             <div className='profileImgContainer'>
               <img src={admin}/>
             </div>
        </div>
        {data.map(item=>{
            return(
                <div key={item.id} className='profileDetailsWrapper'>
                <table>
                    <tbody>
                        <tr>
                            <td>name:</td>
                            <td>{item.user.first_name} {item.user.last_name}</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>{item.user.email}</td>
                        </tr>
                        <tr>
                            <td>role:</td>
                            <td>secritary</td>
                        </tr>
                        <tr>
                            <td>phone number:</td>
                            <td>0{item.user.phone_number}</td>
                        </tr>
                    </tbody>
                </table>
            <div>
                <button>edit</button>
            </div>
            </div>
            )
        })}
       </>}
    </div>
  )
}
