import React from 'react'
import "../styles/App.css"

const Navabar = () => {
  return (
    <nav className='navbar'>
        <h2>RBAC Admin Dashboard</h2>
        <ul>
            <li><a href="#users">Users</a></li>
            <li><a href="#roles">Roles</a></li>
            <li><a href="#permission">Permission</a></li>
        </ul>
    </nav>
  )
}

export default Navabar
