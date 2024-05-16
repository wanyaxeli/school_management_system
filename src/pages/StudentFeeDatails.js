import React,{useState,useEffect, useDebugValue} from 'react'
import student from "../assets/student.png"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
export default function StudentFeeDatails() {
    const [data,setData]=useState([])
    const [payment,setPayment]=useState([])
    const [Groupedpayment,setGroupedPayment]=useState([])
    const location=useLocation()
    useEffect(()=>{
    const data = location.state
    setData([data])
    },[])
    console.log('helllo world',data)
    function GetStudentPaymentDetails(pk){
        const url=`http://127.0.0.1:8000/SpecifcfeePayment/${pk}`
        axios.get(url)
        .then(res=>{
            console.log('payment',res.data)
            setPayment([res.data])
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        const groupedItems = payment.reduce((acc, item) => {
            const { student, amount  } = item;
            const {Student_class,regNo,last_name,first_name,stream}= student
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
          }, {}); // Initial
          console.log('grouped',groupedItems)
          setGroupedPayment(groupedItems)
    },[payment])
    useEffect(()=>{
    data.forEach(item=>{
      GetStudentPaymentDetails(item.student.id)
    })
    },[data])
  return (
    <div className='StudentFeeDatailsWrapper'>
        <div className='StudentFeeDatails'>
            <div className='StudentFeeDatailsImgWrapper'>
                <div className='StudentFeeDatailsImg'>
                    <img src={student}/>
                </div>
            </div>
            {data!=undefined?
            data.map(item=>{
                return(
                    <div key={item.id} className='StudentFeeDatailsContainer'>
                <table>
                    <tbody>
                        <tr>
                            <td>admission no</td>
                            <td>{item.student.regNo}</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>{item.student.first_name} {item.student.last_name}</td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td>{item.student.Student_class}{item.student.stream}</td>
                        </tr>
                        <tr>
                            <td>amount paid</td>
                            <td>{item.amountPaid}</td>
                        </tr>
                        <tr>
                            <td>fee balance</td>
                            <td>{item.balance}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                )
            }):<p>loading</p>}
        </div>
        {Groupedpayment!=undefined?
         Object.keys(Groupedpayment).map(key=>{
            return(
                Groupedpayment[key].map(item=>{
                  return(
            <div key={key} className='paymentDetailsWrapper'>
            <div className='paymentDetailsHeaderWrapper'>
                <h4>student payment details for class {key}</h4>
            </div>
            <div className='paymentDetailsContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>term</th>
                            <th>amount</th>
                            <th>teller no</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.term}</td>
                            <td>{item.amount}</td>
                            <td>{item.teller}</td>
                            <td>{item.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
                  )
                })
            )
         })
        :<p>loading</p>}
    </div>
  )
}
