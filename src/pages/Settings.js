import React, { useState } from 'react';
import './Settings.css';

const tabs = [
  'General',
  'User Management',
  'Deal & Tax Settings',
  'Email Templates',
  'Security',
  'Backup & Restore',
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');

  const renderContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <div className="tab-content">
            <label>
              Company Name:
              <input type="text" defaultValue="Racons CRM" />
            </label>
            <label>
              Timezone:
              <select>
                <option>GMT +5:30</option>
                <option>GMT +0:00</option>
              </select>
            </label>
            <label>
              Date Format:
              <select>
                <option>dd/mm/yyyy</option>
                <option>mm/dd/yyyy</option>
              </select>
            </label>
            <label>
              Currency:
              <select>
                <option>INR</option>
                <option>USD</option>
              </select>
            </label>
          </div>
        );

      case 'User Management':
        return <div className="tab-content">Add/Edit users here.</div>;

      case 'Deal & Tax Settings':
        return <div className="tab-content">Set up deals and tax rules.</div>;

      case 'Email Templates':
        return <div className="tab-content">Customize your email templates.</div>;

      case 'Security':
        return <div className="tab-content">Configure 2FA, roles, etc.</div>;

      case 'Backup & Restore':
        return <div className="tab-content">Manage your data backups.</div>;

      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <h1>General Settings</h1>
      <div className="settings-wrapper">
        <div className="settings-sidebar">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`settings-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="settings-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
