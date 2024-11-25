import React, { useState } from 'react'
import userData from "../../mockData/user.json"

const UserManagement = () => {

    const [users,setUsers] = useState(userData);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelte = (id) => {
        const updateUsers = users.filter((user) => user.id !== id)
        setUsers(updateUsers);
    }

    const handleStatusToggle = (id) => {
        const updateUsers = users.map((user) => 
            user.id === id ? {...user, status: user.status === 'Active' ? 'Inactive' : 'Active'} : user
        );
        setUsers(updateUsers)
    }

  return (
    <div id='users' className='management-section'>
        <h3>User Managment</h3>
        <label htmlFor="">Search Users: </label>
        <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
        />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                        <div>
                        <button className="btn-edit" onClick={() => handleStatusToggle(user.id)}>
                            {user.status === "Active" ? "Deactivate" : "Activate"}
                        </button>
                        <button className="btn-delete" onClick={() => handleDelte(user.id)}>
                            Delete
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
        </table>
      
    </div>
  )
}

export default UserManagement
