import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { FiUserPlus, FiBriefcase, FiDollarSign, FiFileText } from 'react-icons/fi';
import './Dashboard.css';

const data = [
  { name: 'Week 1', value: 40 },
  { name: 'Week 2', value: 60 },
  { name: 'Week 3', value: 45 },
  { name: 'Week 4', value: 70 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Top Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <FiUserPlus size={24} className="icon blue" />
          <div>
            <div className="metric-value">128</div>
            <div className="metric-label">Total Leads</div>
          </div>
        </div>
        <div className="metric-card">
          <FiBriefcase size={24} className="icon purple" />
          <div>
            <div className="metric-value">32</div>
            <div className="metric-label">Active Projects</div>
          </div>
        </div>
        <div className="metric-card">
          <FiDollarSign size={24} className="icon green" />
          <div>
            <div className="metric-value">$12,500</div>
            <div className="metric-label">Revenue This Month</div>
          </div>
        </div>
        <div className="metric-card">
          <FiFileText size={24} className="icon indigo" />
          <div>
            <div className="metric-value">8</div>
            <div className="metric-label">Pending Invoices</div>
          </div>
        </div>
      </div>

      {/* Chart and Activity */}
      <div className="middle-grid">
        <div className="chart-box">
          <h2 className="section-title">Leads Converted This Month</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#1e88e5" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="activity-box">
          <h2 className="section-title">Recent Activity</h2>
          <ul className="activity-list">
            <li>Assigned task to Jon Smith <span className="time">2h ago</span></li>
            <li>Added ticket as Jon’s Lead <span className="time">2h ago</span></li>
            <li>Assigned task to Daniel <span className="time">1 day ago</span></li>
            <li>Added ticket as Ticket <span className="time">1 day ago</span></li>
            <li>Priya raised Ticket <span className="time">1 day ago</span></li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="actions-grid">
        <button className="action-button">+ Add Lead</button>
        <button className="action-button">📈 New Project</button>
        <button className="action-button">📄 Create Invoice</button>
        <button className="action-button">📝 Raise Ticket</button>
      </div>
    </div>
  );
};

export default Dashboard;
