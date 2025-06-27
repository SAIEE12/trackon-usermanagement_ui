import "../modals/AddClientModal.css";
import React, { useState } from "react";
import { FiUserPlus, FiUsers, FiCheckCircle, FiList, FiSearch } from "react-icons/fi";
import { clientData as initialData } from "./ClientData";
import AddClientModal from "../modals/AddClientModal";
import "./ClientManagementPage.css";

const ClientManagementPage = () => {
  const [clients, setClients] = useState(initialData);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    location: "",
    contact: "",
    requirements: "",
    status: "active",
  });

  const departments = ["All Departments", ...new Set(clients.map(c => c.department))];
  const locations = ["All Locations", ...new Set(clients.map(c => c.location))];

  const filteredClients = clients.filter(client => {
    const matchesSearch =
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.department.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = department === "All Departments" || client.department === department;
    const matchesLocation = location === "All Locations" || client.location === location;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      ...formData,
      requirements: parseInt(formData.requirements),
    };
    setClients((prev) => [...prev, newClient]);
    setFormData({
      name: "",
      department: "",
      location: "",
      contact: "",
      requirements: "",
      status: "active",
    });
    setShowModal(false);
  };

  return (
    <div className="client-page">
    <div className="page-header-row">
      <div className="page-header">
        <h2>
          <FiUsers />
          Client Management
        </h2>
        <p>Manage client profiles and track business relationships</p>
      </div>
      <button className="add-client-btn" onClick={toggleModal}>
        <FiUserPlus />
        Add New Client
      </button>
    </div>

      {showModal && (
        <AddClientModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleModal={toggleModal}
        />
      )}

      <div className="cards">
        <div className="card">
          <div className="card-title">
            <FiUsers />
            <span>Total Clients</span>
          </div>
          <b>{clients.length}</b>
        </div>
        <div className="card green">
          <div className="card-title">
            <FiCheckCircle />
            <span>Active Clients</span>
          </div>
          <b>{clients.filter(c => c.status === "active").length}</b>
        </div>
        <div className="card purple">
          <div className="card-title">
            <FiList />
            <span>Total Requirements</span>
          </div>
          <b>{clients.reduce((acc, c) => acc + c.requirements, 0)}</b>
        </div>
      </div>


      <div className="filters">
        <div style={{ position: "relative" }}>
          <FiSearch style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9ca3af"
          }} />
          <input
            type="text"
            placeholder="Search by client name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: "32px" }}
          />
        </div>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map((dept, i) => (
            <option key={i}>{dept}</option>
          ))}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {locations.map((loc, i) => (
            <option key={i}>{loc}</option>
          ))}
        </select>
        <button onClick={() => {
          setSearch("");
          setDepartment("All Departments");
          setLocation("All Locations");
        }}>
          Clear Filters
        </button>
      </div>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Department</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Requirements</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client, idx) => (
            <tr key={idx}>
              <td>{client.name}</td>
              <td>{client.department}</td>
              <td>{client.location}</td>
              <td>{client.contact}</td>
              <td>
                <span className="badge">{client.requirements} active</span>
              </td>
              <td>
                <span className={`status ${client.status}`}>{client.status}</span>
              </td>
            </tr>
          ))}
          {filteredClients.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                No matching clients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientManagementPage;
