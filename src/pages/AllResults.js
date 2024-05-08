import React from 'react'
import user from '../assets/student.png'
import { useNavigate } from 'react-router'
export default function AllResults() {
    const navigate=useNavigate()
    const handleToReport=()=>{
        navigate('/reportSheet')
    }
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
            <div className='allstudentContainer'>
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
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>4</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button onClick={handleToReport}>report sheet</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>4</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>report sheet</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>4</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>report sheet</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>4</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>report sheet</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div>
  )
}
