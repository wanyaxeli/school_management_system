import React from 'react'
import admin from '../assets/admin.png'
import { Outlet,useLocation } from 'react-router'
import { Link } from 'react-router-dom'
export default function Home() {
  const location =useLocation()
  const {pathname}=location
  const splitPath=pathname.split('/')
  console.log(splitPath)
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
                    <li  className={splitPath[2]==='dashboard'?'active':"" |splitPath[1]==='/home'?'active':"" } ><Link to='/home/dashboard'><i className="fa fa-users" aria-hidden="true"></i> dashboard</Link></li>
                    <li className={splitPath[2]==='classes'?'active':""}><Link to="/home/classes" ><i className="fa fa-users" aria-hidden="true"></i> classes</Link></li>
                    <li className={splitPath[2]==='staff'?'active':""}><Link to="/home/staff"><i className="fa fa-users" aria-hidden="true"></i> staff</Link></li>
                    <li className={splitPath[2]==='subject'?'active':""}><Link to='/home/subject'><i className="fa fa-book" aria-hidden="true"></i> subjects</Link></li>
                    <li className={splitPath[2]==='students'?'active':""}><Link to='/home/students'><i className="fa fa-users" aria-hidden="true"></i> students</Link></li>
                    <li className={splitPath[2]==='fee'?'active':""}><Link to='/home/fee'> <i className="fa fa-money" aria-hidden="true"></i> Accounts</Link></li>
                    <li><Link to='#'> <i className="fa fa-file-text" aria-hidden="true"></i> exams and  timetable</Link></li>
                    <li className={splitPath[2]==='results'?'active':""}><Link to='/home/results'><i className="fa fa-file-text" aria-hidden="true"></i> results</Link></li>
                </ul>
              </nav>
        </aside>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
