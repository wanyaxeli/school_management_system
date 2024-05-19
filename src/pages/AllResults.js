import React,{useEffect,useState} from 'react'
import axios from 'axios'
import user from '../assets/student.png'
import { useNavigate } from 'react-router'
export default function AllResults() {
    const navigate=useNavigate()
    const[data,setData]=useState()
    const[groupedData,setGroupedData]=useState()
    const url='http://127.0.0.1:8000/results/'
    const handleToReport=(item)=>{
        navigate('/reportSheet',{state:item})
    }
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            const data=res.data
            // setData(res.data)
            const newDataArray = [];
            data.forEach(element => {
                console.log('elememt',element)
                const results=element.results
                const total=results.reduce((accu,cur)=>{
                 return accu + cur.marks
                },0)
                results.forEach(result=>{
                  const grade=  getGrade(result.marks)
                  result.grade = grade;  // Add grade to the result object
                  console.log('grade',grade)
                })
                const average=total / results.length
                const newData={element,...{total:total},...{average:average.toFixed(2)}}
                console.log('tsasd',newData)
                newDataArray.push(newData);
            });
            setData(newDataArray)
        })
        .catch(error=>{
            console.log(error)
        })
        },[])
        console.log('data',data)
        function getGrade(num) {
          switch (true) {
            case (num < 70 && num >= 65):
              return 'A-';
            case (num < 64 && num >= 50):
              return 'B';
            case (num < 49 && num >= 35):
              return 'C';
            case (num < 34 && num >= 30):
              return 'E';
            case (num < 29):
              return 'F';
            default:
              return 'A';  // Assuming 'A' is for num >= 50
          }
        }
        useEffect(()=>{
           if(data !=undefined){
            const groupedItems = data.reduce((acc, item) => {
                const { element, amount  } = item;
                const {Student_class}=element
                const stringNumber=Student_class.toString().trim().toLowerCase()
                console.log( 'type',Student_class);
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
            <th>image</th>
            <th>admission number</th>
            <th>name</th>
            <th>class</th>
            <th>term</th>
            <th>total</th>
            <th>average</th>
            <th>student pos</th>
            <th>action</th>
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
                <td>{item.element.regNo}</td>
                <td>{item.element.first_name} {item.element.last_name}</td>
                <td>{item.element.Student_class}</td>
                <td>1</td>
                <td>{item.total}</td>
                <td>{item.average}</td>
                <td>4</td>
                <td><button onClick={()=>handleToReport(item)}>report sheet</button></td>
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
