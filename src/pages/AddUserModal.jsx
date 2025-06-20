import React, { useState } from 'react';

const AddUserModal = ({ onClose, setUsers }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'Normal User',
    team: '',
    status: 'active'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...form,
      id: Date.now(),
      lastLogin: new Date().toISOString()
    };
    setUsers(prev => [...prev, newUser]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" className="w-full border p-2 rounded" onChange={handleChange} required />
          <input name="email" placeholder="Email" className="w-full border p-2 rounded" onChange={handleChange} required />
          <input name="team" placeholder="Team" className="w-full border p-2 rounded" onChange={handleChange} required />
          <select name="role" className="w-full border p-2 rounded" onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Normal User">Normal User</option>
          </select>
          <select name="status" className="w-full border p-2 rounded" onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
