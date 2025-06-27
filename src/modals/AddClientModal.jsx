import React from 'react';

const AddClientModal = ({ formData, handleChange, handleSubmit, toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New Client</h3>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Client Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="department"
            placeholder="Department"
            required
            value={formData.department}
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            required
            value={formData.location}
            onChange={handleChange}
          />
          <input
            name="contact"
            placeholder="Contact Email"
            required
            type="email"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            name="requirements"
            placeholder="Number of Requirements"
            required
            type="number"
            value={formData.requirements}
            onChange={handleChange}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="modal-actions">
            <button type="button" onClick={toggleModal}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
