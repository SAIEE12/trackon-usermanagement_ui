import React from 'react';
import { FaUser, FaUsers, FaClipboardList, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdSettings, MdAnalytics } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4 border-r hidden md:block">
      {/* Logo and subtitle */}
      <h2 className="text-xl font-bold text-blue-700 mb-1">TrackOn</h2>
      <p className="text-xs text-gray-400 mb-6">Requirements Tracker</p>

      {/* Navigation */}
      <nav className="space-y-6 text-sm font-medium text-gray-700">
        {/* Management Section */}
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Management</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 px-3 py-2 rounded bg-blue-100 text-blue-700 font-semibold">
              <FaUsers />
              <span>User Management</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaUser />
              <span>Client Management</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaUsers />
              <span>Candidate Management</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaClipboardList />
              <span>Requirements Tracking</span>
            </li>
          </ul>
        </div>

        {/* Delivery Section */}
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Delivery</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaMapMarkerAlt />
              <span>Internal Interviews</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaExternalLinkAlt />
              <span>External Mappings</span>
            </li>
          </ul>
        </div>

        {/* Configuration Section */}
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Configuration</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <MdAnalytics />
              <span>Reports & Analytics</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <MdSettings />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
