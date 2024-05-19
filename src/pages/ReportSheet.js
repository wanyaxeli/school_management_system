import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
export default function ReportSheet() {
    const location=useLocation()
    const[data,setData]=useState([])
    useEffect(()=>{
    const data = location.state 
    setData([data])
    },[])
    console.log('dad',data)
  return (
    <div className='reoprtSheetWrapper'>
       {data!=undefined?
       data.map(item=>{
        return(
            <div className='reportContainer'>
            <h3>kapsabet high school</h3>
            <p>first term report sheet</p>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><span>name:</span>{item.element.first_name} {item.element.last_name}</td>
                        </tr>
                        <tr>
                            <td><span>reg no:</span>{item.element.regNo}</td>
                            <td><span>class:</span>{item.element.Student_class} {item.element.stream}</td>
                            <td><span>sex:</span>male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='resultsTableWrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>subject</th>
                            <th>marks</th>
                            <th>grade</th>
                            <th>position</th>
                            <th>ovaral grade</th>
                            <th>ovaral position</th>
                        </tr>
                    </thead>
                    <tbody>
                      {item.element.results!=undefined? item.element.results.map(result=>{
                        return(
                        <tr>
                            <td>{result.subject}</td>
                            <td>{result.marks}</td>
                            <td>{result.grade}</td>
                            <td>20/300</td>
                            <td></td>
                            <td></td>
                        </tr>
                       
                        )
                      }):<p>loading</p>}
                    </tbody>
                </table>
                <button>print</button>
            </div>
        </div>
        )
       })
       :<p>loading</p>}
    </div>
  )
}
