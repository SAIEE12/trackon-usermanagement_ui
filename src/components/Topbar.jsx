import React from 'react';
import { FaBell } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search candidates, skills, requirements..."
        className="w-1/2 p-2 border rounded-md text-sm"
      />
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-500 text-lg cursor-pointer" />
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            A
          </div>
          <div className="text-right text-sm">
            <div className="font-medium">Admin User</div>
            <div className="text-gray-500 text-xs">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
