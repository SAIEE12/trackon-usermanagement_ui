import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ users }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">User</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Last Login</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;