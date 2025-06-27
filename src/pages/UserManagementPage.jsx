import React, { useState } from 'react';
import { usersData } from './data'; // ? use data.js again
import UserTable from './UserTable';
import FilterBar from './FilterBar';
import AddUserModal from './AddUserModal';

const UserManagementPage = () => {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <>
     
      {/* Page title and Add New User button */}
      <div className="flex justify-between items-center mb-4 px-4 mt-2">
        <div>
          <h2 className="text-xl font-semibold">User Management</h2>
          <p className="text-sm text-gray-600">Manage system users and their roles</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          Add New User
        </button>
      </div>

      {/* Top filter/search bar */}
      <FilterBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        roleFilter={roleFilter}
        onFilter={setRoleFilter}
      />


      {/* Table of users */}
      <UserTable users={filteredUsers} />

      {/* Modal */}
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          setUsers={setUsers}
        />
      )}
    </>
  );
};

export default UserManagementPage;
