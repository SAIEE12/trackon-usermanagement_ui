import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagementPage from './pages/UserManagementPage';
import ClientManagementPage from './pages/ClientManagementPage'; 
import Layout from './components/Layout';

const withLayout = (Component) => <Layout><Component /></Layout>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={withLayout(UserManagementPage)} />
        <Route path="/clients" element={withLayout(ClientManagementPage)} />  
        <Route path="/candidates" element={withLayout(() => <div>Candidate Management</div>)} />
        <Route path="/requirements" element={withLayout(() => <div>Requirements Tracking</div>)} />
        <Route path="/internal-interviews" element={withLayout(() => <div>Internal Interviews</div>)} />
        <Route path="/external-mappings" element={withLayout(() => <div>External Mappings</div>)} />
        <Route path="/analytics" element={withLayout(() => <div>Reports & Analytics</div>)} />
        <Route path="/settings" element={withLayout(() => <div>Settings</div>)} />
      </Routes>
    </Router>
  );
};

export default App;
