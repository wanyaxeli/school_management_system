import React from 'react'
import admin from '../assets/admin.png'
import { Outlet } from 'react-router'
export default function Home() {
  return (
    <div className='homeWrapper'>
        <aside>
            <div className='UserWrapper'>
              <div className='userImage'>
                <img src={admin}/>
              </div>
              <div className='userdetails'>
                <h4>elias wanyama</h4>
                <p>admin</p>
              </div>
            </div>
            <nav>
                <ul>
                    <li className='active'><i className="fa fa-users" aria-hidden="true"></i> dashboard</li>
                    <li><i className="fa fa-users" aria-hidden="true"></i> classes</li>
                    <li><i className="fa fa-users" aria-hidden="true"></i> teachers</li>
                    <li><i className="fa fa-users" aria-hidden="true"></i> workers</li>
                    <li><i className="fa fa-book" aria-hidden="true"></i> subjects</li>
                    <li><i className="fa fa-users" aria-hidden="true"></i> students</li>
                    <li><i className="fa fa-money" aria-hidden="true"></i> Accounts</li>
                    <li> <i className="fa fa-file-text" aria-hidden="true"></i> exams and  timetable</li>
                    <li><i className="fa fa-file-text" aria-hidden="true"></i> results</li>
                </ul>
              </nav>
        </aside>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
