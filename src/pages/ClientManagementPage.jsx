import React, { useState } from "react";
import { clientData } from "./ClientData";

const ClientManagementPage = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");

  const departments = ["All Departments", ...new Set(clientData.map(c => c.department))];
  const locations = ["All Locations", ...new Set(clientData.map(c => c.location))];

  const filteredClients = clientData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(search.toLowerCase()) || client.department.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = department === "All Departments" || client.department === department;
    const matchesLocation = location === "All Locations" || client.location === location;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-bold">Client Management</h1>
        <p className="text-gray-500">Manage client profiles and track business relationships</p>
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="bg-white shadow p-4 rounded border-l-4 border-blue-500">
          <p className="text-sm text-gray-500">Total Clients</p>
          <p className="text-xl font-semibold">{clientData.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded border-l-4 border-green-500">
          <p className="text-sm text-gray-500">Active Clients</p>
          <p className="text-xl font-semibold">
            {clientData.filter(c => c.status === "active").length}
          </p>
        </div>
        <div className="bg-white shadow p-4 rounded border-l-4 border-purple-500">
          <p className="text-sm text-gray-500">Total Requirements</p>
          <p className="text-xl font-semibold">
            {clientData.reduce((acc, c) => acc + c.requirements, 0)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
  <input
    type="text"
    placeholder="Search by client name or department..."
    className="border px-3 py-2 rounded w-full md:w-[340px]"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <select
    className="border px-3 py-2 rounded w-full sm:w-auto"
    value={department}
    onChange={(e) => setDepartment(e.target.value)}
  >
    {departments.map((dept, i) => (
      <option key={i}>{dept}</option>
    ))}
  </select>
  <select
    className="border px-3 py-2 rounded w-full sm:w-auto"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  >
    {locations.map((loc, i) => (
      <option key={i}>{loc}</option>
    ))}
  </select>
  <button
    className="bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200 w-full sm:w-auto"
    onClick={() => {
      setSearch("");
      setDepartment("All Departments");
      setLocation("All Locations");
    }}
  >
    Clear Filters
  </button>
</div>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Requirements</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2 flex items-center gap-2">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded-full">?</div>
                  {client.name}
                </td>
                <td className="px-4 py-2">{client.department}</td>
                <td className="px-4 py-2">{client.location}</td>
                <td className="px-4 py-2">{client.contact}</td>
                <td className="px-4 py-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    {client.requirements} active
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      client.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredClients.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 p-4">
                  No matching clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientManagementPage;






//shashank
// import React from "react";
// import "./ClientPage.css";

// const ClientManagementPage = () => {
//   return (
//     <div className="client-container">
//       <div className="client-header">
//         <h2>Client Management</h2>
//         <p>Manage client profiles and track business relationships</p>
//       </div>

//       <div className="client-stats">
//         <div className="client-card blue">Total Clients<br /><b>5</b></div>
//         <div className="client-card green">Active Clients<br /><b>4</b></div>
//         <div className="client-card purple">Total Requirements<br /><b>18</b></div>
//       </div>

//       <div className="client-filters">
//         <input type="text" placeholder="Search by client name or department..." />
//         <select>
//           <option>All Departments</option>
//         </select>
//         <select>
//           <option>All Locations</option>
//         </select>
//         <button className="clear-button">Clear Filters</button>
//       </div>

//       <div className="client-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Client</th>
//               <th>Department</th>
//               <th>Location</th>
//               <th>Contact</th>
//               <th>Requirements</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td><span className="avatar">?</span> TechCorp Solutions</td>
//               <td>Engineering</td>
//               <td>San Francisco, CA</td>
//               <td>john.doe@techcorp.com</td>
//               <td><span className="req-count">5 active</span></td>
//               <td><span className="status active">active</span></td>
//             </tr>
//             <tr>
//               <td><span className="avatar">?</span> FinanceWise Group</td>
//               <td>Finance</td>
//               <td>New York, NY</td>
//               <td>sarah.smith@financewise.com</td>
//               <td><span className="req-count">3 active</span></td>
//               <td><span className="status active">active</span></td>
//             </tr>
//             <tr>
//               <td><span className="avatar">?</span> HealthFirst Inc</td>
//               <td>Healthcare</td>
//               <td>Boston, MA</td>
//               <td>mike.johnson@healthfirst.com</td>
//               <td><span className="req-count">2 active</span></td>
//               <td><span className="status inactive">inactive</span></td>
//             </tr>
//             <tr>
//               <td><span className="avatar">?</span> EduTech Academy</td>
//               <td>Education</td>
//               <td>Austin, TX</td>
//               <td>emily.davis@edutech.com</td>
//               <td><span className="req-count">7 active</span></td>
//               <td><span className="status active">active</span></td>
//             </tr>
//             <tr>
//               <td><span className="avatar">?</span> RetailMax Corp</td>
//               <td>Retail</td>
//               <td>Chicago, IL</td>
//               <td>david.wilson@retailmax.com</td>
//               <td><span className="req-count">1 active</span></td>
//               <td><span className="status active">active</span></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ClientManagementPage;






// import React, { useState } from 'react';
// import { clientData } from './ClientData';
// import ClientTable from './ClientTable';

// const ClientManagementPage = () => {
//   const [search, setSearch] = useState('');
//   const filteredClients = clientData.filter(c =>
//     c.name.toLowerCase().includes(search.toLowerCase()) ||
//     c.department.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalClients = clientData.length;
//   const activeClients = clientData.filter(c => c.status === 'active').length;
//   const totalRequirements = clientData.reduce((sum, c) => sum + c.requirements, 0);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Client Management</h1>
//           <p className="text-gray-500">Manage client profiles and track business relationships</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">+ Add New Client</button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         <div className="bg-white p-4 rounded shadow border">
//           <p className="text-sm text-gray-500">Total Clients</p>
//           <h2 className="text-xl font-bold">{totalClients}</h2>
//         </div>
//         <div className="bg-white p-4 rounded shadow border">
//           <p className="text-sm text-gray-500">Active Clients</p>
//           <h2 className="text-xl font-bold">{activeClients}</h2>
//         </div>
//         <div className="bg-white p-4 rounded shadow border">
//           <p className="text-sm text-gray-500">Total Requirements</p>
//           <h2 className="text-xl font-bold">{totalRequirements}</h2>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-3 mb-4">
//         <input
//           type="text"
//           placeholder="Search by client name or department..."
//           className="border px-4 py-2 rounded w-full md:w-1/2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button
//           className="px-4 py-2 bg-gray-100 rounded text-sm text-gray-700 hover:bg-gray-200"
//           onClick={() => setSearch('')}
//         >
//           Clear Filters
//         </button>
//       </div>

//       <ClientTable clients={filteredClients} />
//     </div>
//   );
// };

// export default ClientManagementPage;



