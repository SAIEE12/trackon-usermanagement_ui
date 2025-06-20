import React from 'react';

const FilterBar = ({ searchTerm, onSearch, roleFilter, onFilter }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <select
        value={roleFilter}
        onChange={(e) => onFilter(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      >
        <option>All Roles</option>
        <option>Admin</option>
        <option>Manager</option>
        <option>Normal User</option>
      </select>
    </div>
  );
};

export default FilterBar;