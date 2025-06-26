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
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <>
      <FilterBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        roleFilter={roleFilter}
        onFilter={setRoleFilter}
      />

      <UserTable users={filteredUsers} />

      {showAddModal && <AddUserModal onClose={() => setShowAddModal(false)} setUsers={setUsers} />}
    </>
  );
};

export default UserManagementPage;
