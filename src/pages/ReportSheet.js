import React from 'react'

export default function ReportSheet() {
  return (
    <div className='reoprtSheetWrapper'>
        <div className='reportContainer'>
            <h3>kapsabet high school</h3>
            <p>first term report sheet</p>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><span>name:</span>elias wanyama</td>
                        </tr>
                        <tr>
                            <td><span>reg no:</span>c38/5751/2021</td>
                            <td><span>class:</span>4 east</td>
                            <td><span>sex:</span>male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='resultsTableWrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>subject</th>
                            <th>marks</th>
                            <th>grade</th>
                            <th>position</th>
                            <th>ovaral grade</th>
                            <th>ovaral position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>english</td>
                            <td>70</td>
                            <td>b+</td>
                            <td>20/300</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>english</td>
                            <td>70</td>
                            <td>b+</td>
                            <td>20/300</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>english</td>
                            <td>70</td>
                            <td>b+</td>
                            <td>20/300</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>english</td>
                            <td>70</td>
                            <td>b+</td>
                            <td>20/300</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ovaral pos</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>A</td>
                            <td>20/300</td>
                        </tr>
                    </tbody>
                </table>
                <button>print</button>
            </div>
        </div>
    </div>
  )
}
