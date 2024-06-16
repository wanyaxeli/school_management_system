import React,{useState,useEffect} from 'react'
import teacher from '../assets/admin.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function AllFeeRecord() {
    const initialState={
        regNo:'',
        name:'',
        term:'',
        amount:'',
        teller:'',
        date:'',
    }
    const[data,setData]=useState([])
    const[status,setStatus]=useState()
    const[term,setTerm]=useState()
    const[amount,setAmount]=useState()
    const[groupedData,setGroupedData]=useState()
    const[feeSystem,setFeeSystem]=useState([])
    const navigate=useNavigate()
    function GetFeePayment(id){
        const url=`http://127.0.0.1:8000/SpecifcfeePayment/${id}`
        axios.get(url)
        .then(res=>{
            const{term,amount}=res.data
            setTerm(term)
            setAmount(amount)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    // school fees system
    function GetFeeSystem(){
        const url='http://127.0.0.1:8000/feeSystem/'
        axios.get(url)
        .then(res=>{
            console.log('system',res.data)
            setFeeSystem(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
    GetFeeSystem()
    //student fee balance 
    const url='http://127.0.0.1:8000/feeBalance/'
    axios.get(url)
    .then(res=>{
        const data=res.data.flat()
        setData(data)
    })
    .catch(error=>{
        console.log(error)
    })
    },[])
    useEffect(()=>{
    data.forEach(item=>{
    GetFeePayment(item.student.id)
    })
    },[data])
    useEffect(()=>{
        const groupedItems = data.reduce((acc, item) => {
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
          }, {}); // Initial value of the accumulator is an empty object
        setGroupedData(groupedItems)
    },[data])
    function TermModifyer(term){
        if (term === 1){
            return 'term_one'
        }
        else if (term === 2){
            return 'term_two'
        }else if (term ===3){
            return 'term_three'
        }
        else return term
     }
    useEffect(()=>{
     data.forEach(item=>{
        const studentclass=item.student.Student_class
        const amount = item.amount
        const Schoolterm=TermModifyer(term)
        const studentClassFeeSystem= feeSystem.filter(item=>{
                return item.classFee === studentclass
            })
        studentClassFeeSystem.forEach(item=>{
            if (item.hasOwnProperty(Schoolterm)){
                let Systemamount = item[Schoolterm]
                console.log('hhs',Systemamount)  
                if (amount >= Systemamount){
                    setStatus('cleared')
                }
                else{
                    setStatus('pending')
                }
            }
           
        })
     })
    },[amount,term])
    const handleView=(item)=>{
        console.log('id',item)
        navigate('/home/studentFeeDetails',{state:item})
       }
    const handleToSchoolFeeSytem=()=>{
    navigate('/home/feesystem')
    }
  return (
    <div className='allFeeRecordWrapper'>
        <div className='allfeeRecordContainer'>
            <h3>Accounts</h3>
            <div className='feeSearchWrapper'>
              <form>
                <table>
                    <tbody>
                        <tr>
                            <td><input type='search' placeholder='enter admission ..'/></td>
                            <td><input type='search' placeholder='enter name..'/></td>
                            <td><input type='search' placeholder='enter class'/></td>
                            <td><button>search</button></td>
                        </tr>
                    </tbody>
                </table>
              </form>
            </div>
            <div><span className='feelink' onClick={handleToSchoolFeeSytem}>school fee system</span></div>
        </div>
         {groupedData !=undefined?
           Object.keys(groupedData).map(key => {
            return (
                <div className='detailsWrapper' key={key}>
                    <div className='teacherDetailHeader'>
                        <h5>Student's Details</h5>
                    </div>
                    <div className='teacherContainer'>
                        <p style={{ textAlign: 'start', paddingBottom: 10 }}>Class {key}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Admin No</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedData[key].map(item => (
                                    <tr key={item.student.regNo}>
                                        <td>
                                            <div className='studentImgWrapper'>
                                                <img src={teacher} alt='Student' />
                                            </div>
                                        </td>
                                        <td>{item.student.regNo}</td>
                                        <td>{item.student.first_name} {item.student.last_name}</td>
                                        <td>{item.student.Student_class}{item.student.stream}</td>
                                        <td>{item.amountPaid}</td>
                                        <td><span className='FeestatusWrapper'>{status}</span></td>
                                        <td><button onClick={() => handleView(item)}>View</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }):<p>loading</p>}
    </div> 
  )
}
