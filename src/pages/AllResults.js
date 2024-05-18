import React,{useEffect,useState} from 'react'
import axios from 'axios'
import user from '../assets/student.png'
import { useNavigate } from 'react-router'
export default function AllResults() {
    const navigate=useNavigate()
    const[data,setData]=useState()
    const[groupedData,setGroupedData]=useState()
    const url='http://127.0.0.1:8000/results/'
    const handleToReport=()=>{
        navigate('/reportSheet')
    }
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            console.log('result',res.data)
            setData(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
        },[])
        useEffect(()=>{
           if(data !=undefined){
            const groupedItems = data.reduce((acc, item) => {
                const { Student_class, amount  } = item;
                const stringNumber=Student_class.toString().trim().toLowerCase()
                console.log( 'type',typeof stringNumber);
                console.log('redues',stringNumber)
                // const studentClass=student.Student_class
                // Check if the category key exists in the accumulator object (acc)
                if (!acc[stringNumber]) {
                  acc[stringNumber] = []; // Initialize an empty array for the category
                }
              
                acc[stringNumber].push(item); // Push the current item into the corresponding category array
                return acc;
              }, {}); // Initial value of the accumulator is an empty object
            setGroupedData(groupedItems)
            console.log('grouped',groupedItems)
           }
        },[data])
  return (
    <div className='allResultsWrapper'>
        <h3>view published results</h3>
          <div className='studentSearchWrapper'>
             <form>
                <table>
                    <tbody>
                        <tr>
                            <td>admission number</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>student name</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>term</td>
                            <td><input type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <button className='studentSearchBnt'>search</button>
             </form>
            </div>
        {groupedData!=undefined?
         Object.keys(groupedData).map(key=>{
            return(
                groupedData[key].map(item=>{
                    return(
                        <div key={key} className='allstudentContainer'>
                        <div className='allStudentHeader'>
                         <h4>Student details</h4>
                        </div>
                        <div className='allStudentTableWrapper'>
                        <table>
                            <thead>
                                <tr>
                                    <th>image</th>
                                    <th>admission number</th>
                                    <th>name</th>
                                    <th>class</th>
                                    <th>term</th>
                                    <th>total</th>
                                    <th>average</th>
                                    <th>stduent pos</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='studentImgWrapper'>
                                            <img src={user}/>
                                        </div>
                                    </td>
                                    <td>{item.regNo}</td>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{item.Student_class}</td>
                                    <td>1</td>
                                    <td>500</td>
                                    <td>61.8</td>
                                    <td>4</td>
                                    <td><button onClick={handleToReport}>report sheet</button></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    )
                })
            )
         })
        :<p>loaading</p>}
    </div>
  )
}
