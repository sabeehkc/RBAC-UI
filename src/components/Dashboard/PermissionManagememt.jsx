import React, { useState } from "react";

const PermissionManagement = () => {
  // Updated roles and permissions structure with string-based permissions
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "Editor", permissions: ["read", "write"] },
    { id: 3, name: "Viewer", permissions: ["read"] },
  ]);

  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read", value: "read" },
    { id: 2, name: "Write", value: "write" },
    { id: 3, name: "Delete", value: "delete" },
  ]);

  // Function to toggle permissions for a role
  const handleTogglePermission = (roleId, permissionValue) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permissionValue)
                ? role.permissions.filter((perm) => perm !== permissionValue)
                : [...role.permissions, permissionValue],
            }
          : role
      )
    );
  };

  return (
    <div id="permission" className="management-section">
      <h3>Permission Management</h3>
      <table className="permission-table">
        <thead>
          <tr>
            <th>Role</th>
            {permissions.map((perm) => (
              <th key={perm.id}>{perm.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              {permissions.map((perm) => (
                <td key={perm.id}>
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(perm.value)}
                    onChange={() => handleTogglePermission(role.id, perm.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionManagement;
