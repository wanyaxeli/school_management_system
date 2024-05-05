import React from 'react'

export default function AddFeeRecord() {
  return (
    <div className='addfeeRecordWrapper'>
        <h3>fee management</h3>
        <div className='addfeeRecordContainer'>
        <div className='teacherDetailHeader'>
            <h5>payment details</h5>
        </div>
        <div className='recordsContainer'>
            <form>
            <table>
                <tbody>
                    <tr>
                        <td>student reg no</td>
                        <td><input type='type'/></td>
                        <td>student name</td>
                        <td><input type='type'/></td>
                    </tr>
                    <tr>
                        <td>student class</td>
                        <td><input type='type'/></td>
                        <td>fee term</td>
                        <td><input type='type'/></td>
                    </tr>
                    <tr>
                        <td>amount paid</td>
                        <td><input type='type'/></td>
                        <td>teller no</td>
                        <td><input type='type'/></td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td><input type='date'/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>save fee payment</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}
