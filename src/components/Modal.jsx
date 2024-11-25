import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, title, placeholder, value, setValue }) => {
    if (!isOpen) return null;  

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{title}</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="roleName">Role Name:</label>
                        <input
                            id="roleName"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={placeholder}
                            className='search-bar'
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose} className="btn-cancel">
                            Cancel
                        </button>
                        <button type="button" onClick={onSubmit} className="btn-save">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
