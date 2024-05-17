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
                    <li  className={splitPath[1]==='dashboard'?'active':"" |splitPath[1]===''?'active':"" } ><Link to='/dashboard'><i className="fa fa-users" aria-hidden="true"></i> dashboard</Link></li>
                    <li className={splitPath[1]==='classes'?'active':""}><Link to="/classes" ><i className="fa fa-users" aria-hidden="true"></i> classes</Link></li>
                    <li className={splitPath[1]==='staff'?'active':""}><Link to="/staff"><i className="fa fa-users" aria-hidden="true"></i> staff</Link></li>
                    <li className={splitPath[1]==='subject'?'active':""}><Link to='/subject'><i className="fa fa-book" aria-hidden="true"></i> subjects</Link></li>
                    <li className={splitPath[1]==='students'?'active':""}><Link to='/students'><i className="fa fa-users" aria-hidden="true"></i> students</Link></li>
                    <li className={splitPath[1]==='fee'?'active':""}><Link to='/fee'> <i className="fa fa-money" aria-hidden="true"></i> Accounts</Link></li>
                    <li><Link to='#'> <i className="fa fa-file-text" aria-hidden="true"></i> exams and  timetable</Link></li>
                    <li className={splitPath[1]==='results'?'active':""}><Link to='/results'><i className="fa fa-file-text" aria-hidden="true"></i> results</Link></li>
                </ul>
              </nav>
        </aside>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
