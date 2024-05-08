import React from 'react'

export default function EditResults() {
  return (
    <div className='addResultsWrapper'>
        <h3>edit student's results</h3>
        <div className='teacherFormWrapper'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>reg number</td>
                            <td><input type='text'/></td>
                            <td>student's name</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>    
                            <td>class</td>
                            <td><input type='text'/></td>
                            <td>stream</td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td>subject</td>
                            <td><input type='text'/></td>
                            <td>marks</td>
                            <td><input type='text'/></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>edit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
