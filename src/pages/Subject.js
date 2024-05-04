import React from 'react'

export default function Subject() {
  return (
    <div className='classesWrapper subjectWrapper'>
        <h3>subjects</h3>
        <div className='classFormWrapper subjectFormContainer'>
          <form>
            <table>
                <tbody>
                    <tr>
                        <td>subject name</td>
                        <td><input type='text'/></td>
                    </tr>
                </tbody>
            </table>
            <div className='subjectBtnWrapper'>
                <button>add</button>
                <button>delete</button>
            </div>
          </form>
        </div>
        <div className='classContainer subjectContainer'>
            <table>
                <thead>
                    <tr>
                        <th>class name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>english</td>
                    </tr>
                    <tr>
                        <td>mathematics</td>
                    </tr>
                    <tr>
                        <td>kiswahili</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
