import React from 'react'

export default function AddStudents() {
  return (
    <div className='addStudentWrapper'>
        <h2>student registration</h2>
        <div className='studentContainer'>
         <form>
            <table>
                <tbody>
                    <tr>
                        <td>admission number</td>
                        <td><input type='text' /></td>
                        <td>student name</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                       <td>D.O.B</td>
                        <td><input type='text' /></td>
                       <td>Class</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Stream</td>
                        <td><input type='text' /></td>
                        <td>parent/guardian name</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>parent/guardian phone number</td>
                        <td><input type='text' /></td>
                    </tr>
                </tbody>
            </table>
         </form>
        </div>
        <div className='registerBtnWrapper'>
            <button>Register</button>
        </div>
    </div>
  )
}
