import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
