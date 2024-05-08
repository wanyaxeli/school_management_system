import React from 'react'
import user from '../assets/student.png'
export default function ClassResults() {
    const handleClassResult=()=>{

    }
  return (
    <div className='ClassResultsWrapper'>
        <h3>View class performances</h3>
        <div className='allstudentContainer'>
                <div className='allStudentHeader'>
                 <h4>class details</h4>
                </div>
                <div className='allStudentTableWrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>class</th>
                            <th>term</th>
                            <th>total students</th>
                            <th>average</th>
                            <th>class pos</th>
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
                            <td>4 east</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button onClick={handleClassResult}>view class</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>4 east</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>view class</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>4 east</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>view class</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>4 east</td>
                            <td>1</td>
                            <td>500</td>
                            <td>61.8</td>
                            <td>4</td>
                            <td><button>view class</button></td>
                        </tr>
                    </tbody>
                </table>
                <button>print</button>
                </div>
            </div>
    </div>
  )
}
