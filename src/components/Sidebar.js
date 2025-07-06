import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // We’ll style it here

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">CRM</h2>
      <nav className="sidebar-nav">
        <NavLink to="/" end className="sidebar-link">
          Dashboard
        </NavLink>
        <NavLink to="/leads" className="sidebar-link">
          Leads
        </NavLink>
        <NavLink to="/clients" className="sidebar-link">
          Clients
        </NavLink>
        <NavLink to="/projects" className="sidebar-link">
          Projects  
        </NavLink>
        <NavLink to="/tasks" className="sidebar-link">
          Tasks
        </NavLink>
        <NavLink to="/support" className="sidebar-link">
          Support
        </NavLink>
        <NavLink to="/reports" className="sidebar-link">
          Reports
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
