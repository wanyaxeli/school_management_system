import React from 'react'

export default function FeeSystem() {
  return (
    <div className='classesWrapper'>
    <h3>school fees system</h3>
    <div className=' feeStystemWrapper'>
      <form>
        <table>
            <tbody>
                <tr>
                    <td>class name</td>
                    <td><input type='text'/></td>
                    <td>term one</td>
                    <td><input type='text'/></td>
                </tr>
                <tr>
                    <td>term two</td>
                    <td><input type='text'/></td>
                    <td>term three</td>
                    <td><input type='text'/></td>
                </tr>
                <tr>
                    <td>total amount</td>
                    <td  className='lastrow'><input type='text'/></td>
                </tr>
            </tbody>
        </table>
        <div>
            <button className='feeStystemBtn'>create</button>
        </div>
      </form>
    </div>
    <div className='classContainer feeSystemContainer'>
        <table>
            <thead>
                <tr>
                    <th>class name</th>
                    <th>term one</th>
                    <th>term two</th>
                    <th>term three</th>
                    <th>total amount</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>20000</td>
                    <td>15000</td>
                    <td>10000</td>
                    <td>45000</td>
                    <td><button>edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
