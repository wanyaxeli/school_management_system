import React,{useState,useEffect} from 'react'
import user from "../assets/admin.png"
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function AllStudents() {
    const initialState={
        regNo:'',
        name:'',
        class:'',
        stream:''
    }
    const [data,setData]=useState()
    const [query,setQuery]=useState(initialState)
    const [search,setSearch]=useState([])
    const [groupedData,setGroupedData]=useState()
    const navigate =useNavigate()
    useEffect(()=>{
        const url='http://127.0.0.1:8000/student/'
        axios.get(url)
        .then(res=>{
            console.log('asds',res.data)
            const data=res.data.flat()
            setData(data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    const handleChange=(e)=>{
        const {value,name}=e.target
        setQuery({...query,[name]:value})
    }
    useEffect(()=>{
       if(data!=undefined){
        const groupedItems = data.reduce((acc, item) => {
            const { Student_class,} = item;
            const stringNumber=Student_class.toString().trim().toLowerCase()
            console.log( 'type',typeof stringNumber);
            // Check if the category key exists in the accumulator object (acc)
            if (!acc[stringNumber]) {
              acc[stringNumber] = []; // Initialize an empty array for the category
            }
          
            acc[stringNumber].push(item); // Push the current item into the corresponding category array
            return acc;
          }, {}); // Initial value of the accumulator is an empty object
          console.log('grouped',groupedItems)
          setGroupedData(groupedItems)
       }
    },[data])
    const handleView=(item)=>{
     console.log('asdff',item)
     navigate('/studentDetails',{state:item})
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        const url='http://127.0.0.1:8000/search/'
        const {regNo}=query
        axios.post(url,{regNo:regNo})
        .then(res=>{
            console.log(res.data)
            setSearch([res.data])
        })
        .catch(error=>console.log(error))
    }
    console.log('grouped',groupedData)
  return (
    <div className='allStudentWrapper'>
        <h3>all student</h3>
        <div className='studentSearchWrapper'>
             <form>
                <table>
                    <tbody>
                        <tr>
                            <td>admission number</td>
                            <td><input onChange={handleChange} name='regNo' type='text'/></td>
                        </tr>
                        <tr>
                            <td>student name</td>
                            <td><input onChange={handleChange} name='name' type='text'/></td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td><input onChange={handleChange} name='class' type='text'/></td>
                        </tr>
                        <tr>
                            <td>stream</td>
                            <td><input onChange={handleChange} name='stream' type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <button className='studentSearchBnt' onClick={handleSearch}>search</button>
             </form>
            </div>
            {groupedData ? (
  Object.keys(groupedData).map(classKey => (
    <div key={classKey} className='allstudentContainer'>
      <div className='allStudentHeader'>
        <h4>Class {classKey} Students</h4>
      </div>
      <div className='allStudentTableWrapper'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Admission Number</th>
              <th>Name</th>
              <th>Date of Joining</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groupedData[classKey].map(item => (
              <tr key={item.id}>
                <td>
                  <div className='studentImgWrapper'>
                    <img src={user} alt="Student"/>
                  </div>
                </td>
                <td>{item.regNo}</td>
                <td>{item.first_name} {item.last_name}</td>
                <td>{item.dob}</td>
                <td>{item.Student_class}{item.stream}</td>
                <td><button onClick={() => handleView(item)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))
) : (
  <p>Loading...</p>
)}
    </div>
  )
}
