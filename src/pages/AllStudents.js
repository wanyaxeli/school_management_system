import React from 'react'
import user from "../assets/admin.png"
export default function AllStudents() {
  return (
    <div className='allStudentWrapper'>
        <h3>all student</h3>
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
                            <td>stream</td>
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
                            <th>date of joining</th>
                            <th>class</th>
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
                            <td>20/20/2021</td>
                            <td>4</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>20/20/2021</td>
                            <td>4</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='studentImgWrapper'>
                                    <img src={user}/>
                                </div>
                            </td>
                            <td>c38/3731/2021</td>
                            <td>elias wanyama</td>
                            <td>20/20/2021</td>
                            <td>4</td>
                            <td><button>View</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div>
  )
}
