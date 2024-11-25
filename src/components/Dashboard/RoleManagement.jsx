import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import Modal from '../Modal';  
import roleData from '../../mockData/roles.json';  

const RoleManagement = () => {
    const [roles, setRoles] = useState(roleData); 
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [currentRole, setCurrentRole] = useState({ id: null, name: '' });  
    const [modalTitle, setModalTitle] = useState('');  

    // Opens modal for adding a new role
    const openAddRoleModal = () => {
        setModalTitle('Add New Role');
        setCurrentRole({ id: null, name: '' }); 
        setIsModalOpen(true);
    };

    // Opens modal for editing an existing role
    const openEditRoleModal = (role) => {
        setModalTitle('Edit Role');
        setCurrentRole(role);  
        setIsModalOpen(true);
    };

    const handleSaveRole = () => {
        if (!currentRole.name.trim()) {
            toast.error('Role name cannot be empty!');
            return;
        }

        if (currentRole.id) {
            // Edit existing role
            setRoles(
                roles.map((role) =>
                    role.id === currentRole.id ? currentRole : role
                )
            );
            toast.success('Role updated successfully!');
        } else {
            // Add new role
            setRoles([ ...roles, { id: Date.now(), name: currentRole.name, permissions: [] } ]);
            toast.success('New role added successfully!');
        }

        setIsModalOpen(false); 
    };

    // Delete a role
    const handleDeleteRole = (id) => {
        setRoles(roles.filter((role) => role.id !== id)); 
        toast.success('Role deleted successfully!');
    };

    return (
        <div id="roles" className="management-section">
            <h3>Role Management</h3>
            <button className="btn-add" onClick={openAddRoleModal}>
                Add Role
            </button>

            <ul className="role-list">
                {roles.map((role) => (
                    <li key={role.id} className="role-item">
                        <span>{role.name}</span>
                        <div className="role-actions">
                            <button
                                className="btn-edit"
                                onClick={() => openEditRoleModal(role)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn-delete"
                                onClick={() => handleDeleteRole(role.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modal for Add/Edit Role */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}  
                onSubmit={handleSaveRole}  
                title={modalTitle}  
                placeholder="Enter Role Name"  
                value={currentRole.name}  
                setValue={(name) => setCurrentRole({ ...currentRole, name })}  
            />

            {/* Toast Container to display the toasts */}
            <ToastContainer 
                position="top-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover
            />
        </div>
    );
};

export default RoleManagement;