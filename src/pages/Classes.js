import React from 'react'

export default function Classes() {
  return (
    <div className='classesWrapper'>
        <h3>Classes</h3>
        <div className='classFormWrapper'>
          <form>
            <table>
                <tbody>
                    <tr>
                        <td>class name</td>
                        <td><input type='text'/></td>
                        <td>stream name</td>
                        <td><input type='text'/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>add</button>
                <button>delete</button>
            </div>
          </form>
        </div>
        <div className='classContainer'>
            <table>
                <thead>
                    <tr>
                        <th>class name</th>
                        <th>class stream</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>east</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>west</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>north</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>south</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
