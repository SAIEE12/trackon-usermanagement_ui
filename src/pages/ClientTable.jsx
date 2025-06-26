import React from 'react';
import ClientRow from './ClientRow';

const ClientTable = ({ clients }) => (
  <table className="w-full bg-white rounded shadow text-left">
    <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
      <tr>
        <th className="px-4 py-2">Client</th>
        <th className="px-4 py-2">Department</th>
        <th className="px-4 py-2">Location</th>
        <th className="px-4 py-2">Contact</th>
        <th className="px-4 py-2">Requirements</th>
        <th className="px-4 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      {clients.map((client, index) => (
        <ClientRow key={index} client={client} />
      ))}
    </tbody>
  </table>
);

export default ClientTable;
