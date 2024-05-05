import React from 'react'

export default function AddExpense() {
  return (
    <div className='addfeeRecordWrapper'>
        <h3>expense management</h3>
        <div className='addfeeRecordContainer'>
        <div className='teacherDetailHeader'>
            <h5>payment details</h5>
        </div>
        <div className='recordsContainer'>
            <form>
            <table>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td><input type='type'/></td>
                        <td>id no</td>
                        <td><input type='type'/></td>
                    </tr>
                    <tr>
                        <td>phone no</td>
                        <td><input type='type'/></td>
                        <td>email</td>
                        <td><input type='email'/></td>
                    </tr>
                    <tr>
                        <td>expense type</td>
                        <td><input type='type'/></td>
                        <td>amount</td>
                        <td><input type='type'/></td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td><input type='date'/></td>
                        <td>status</td>
                        <td><input type='type'/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>save expense</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}
