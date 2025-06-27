import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaUsers, FaClipboardList, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdSettings, MdAnalytics } from 'react-icons/md';

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 ${
      isActive ? 'bg-blue-100 text-blue-700 font-semibold' : ''
    }`;

  return (
    <div className="w-64 bg-white shadow-md h-screen p-4 border-r hidden md:block">
      <h2 className="text-xl font-bold text-blue-700 mb-1">TrackOn</h2>
      <p className="text-xs text-gray-400 mb-6">Requirements Tracker</p>

      <nav className="space-y-6 text-sm font-medium text-gray-700">
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Management</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={linkClasses}>
                <FaUsers />
                <span>User Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients" className={linkClasses}>
                <FaUser />
                <span>Client Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/candidates" className={linkClasses}>
                <FaUsers />
                <span>Candidate Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/requirements" className={linkClasses}>
                <FaClipboardList />
                <span>Requirements Tracking</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Delivery</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/internal-interviews" className={linkClasses}>
                <FaMapMarkerAlt />
                <span>Internal Interviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/external-mappings" className={linkClasses}>
                <FaExternalLinkAlt />
                <span>External Mappings</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Configuration</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/analytics" className={linkClasses}>
                <MdAnalytics />
                <span>Reports & Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={linkClasses}>
                <MdSettings />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
