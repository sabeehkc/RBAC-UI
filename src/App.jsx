import "./styles/App.css"
import React from 'react'
import UserManagement from "./components/Dashboard/UserManagement"
import RoleManagement from "./components/Dashboard/RoleManagement"
import PermissionManagememt from "./components/Dashboard/PermissionManagememt"
import Navabar from "./components/Navabar"

const App = () => {
  return (
    <>
      <Navabar/>
      <UserManagement/>
      <RoleManagement/>
      <PermissionManagememt/>
    </>
  )
}

export default App

