import React, { useState } from 'react';
import { usersData } from './data'; // ? use data.js again
import UserTable from './UserTable';
import FilterBar from './FilterBar';
import AddUserModal from './AddUserModal';
import Layout from '../components/Layout'; // keep the sidebar/topbar layout

const UserManagementPage = () => {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-gray-500">Manage system users and their roles</p>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setShowAddModal(true)}
          >
            + Add New User
          </button>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          roleFilter={roleFilter}
          onFilter={setRoleFilter}
        />

        <UserTable users={filteredUsers} />

        {showAddModal && <AddUserModal onClose={() => setShowAddModal(false)} setUsers={setUsers} />}
      </div>
    </Layout>
  );
};

export default UserManagementPage;
