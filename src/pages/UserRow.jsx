import React from 'react';
import { Eye, Edit, Trash } from 'lucide-react';

const badgeColor = {
  Admin: 'bg-green-100 text-green-700',
  Manager: 'bg-purple-100 text-purple-700',
  'Normal User': 'bg-blue-100 text-blue-700'
};

const statusColor = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-red-100 text-red-700'
};

const UserRow = ({ user }) => {
  return (
    <tr className="border-b">
      <td className="p-3">
        <div className="font-semibold">{user.name}</div>
        <div className="text-sm text-gray-500">{user.email}</div>
      </td>
      <td className="p-3">
        <span className={`px-2 py-1 rounded-full text-sm ${badgeColor[user.role]}`}>{user.role}</span>
        <div className="text-xs text-gray-500">{user.team}</div>
      </td>
      <td className="p-3">
        <span className={`px-2 py-1 rounded-full text-sm ${statusColor[user.status]}`}>{user.status}</span>
      </td>
      <td className="p-3">
        {new Date(user.lastLogin).toLocaleString()}
      </td>
      <td className="p-3 text-right flex justify-end gap-3">
        <Eye className="w-4 h-4 text-blue-500 cursor-pointer" />
        <Edit className="w-4 h-4 text-yellow-500 cursor-pointer" />
        <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default UserRow;