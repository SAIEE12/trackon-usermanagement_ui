import React from 'react';

const ClientRow = ({ client }) => (
  <tr className="border-b hover:bg-gray-50 text-sm">
    <td className="flex items-center gap-2 px-4 py-2">
      <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs">
        <i className="fas fa-building"></i>
      </div>
      <span>{client.name}</span>
    </td>
    <td className="px-4 py-2">{client.department}</td>
    <td className="px-4 py-2">{client.location}</td>
    <td className="px-4 py-2">{client.contact}</td>
    <td className="px-4 py-2">
      <span className="text-blue-600 font-medium">{client.requirements} active</span>
    </td>
    <td className="px-4 py-2">
      <span className={`px-2 py-1 rounded-full text-xs ${client.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {client.status}
      </span>
    </td>
  </tr>
);

export default ClientRow;
