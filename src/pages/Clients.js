import './Clients.css'; // Create this for styling

const clients = [
  {
    name: 'Riya Patel',
    company: 'TechZen Ltd.',
    email: 'riya@teconi.in',
    phone: '98573320',
    assignedTo: 'Anuj Sharma',
    status: 'Active',
  },
  {
    name: 'Arjun Mehra',
    company: 'BuildPro',
    email: 'arjun@antz.in',
    phone: '100683210',
    assignedTo: 'Sneha Rao',
    status: 'Active',
  },
  // Add more clients as needed
];

const Clients = () => {
  return (
    <div className="clients-page">
      <div className="clients-header">
        <h1>Clients</h1>
        <div className="clients-controls">
          <button className="add-btn">+ Add New Client</button>
          <button className="import-btn">Import</button>
        </div>
      </div>

      <div className="filters">
        <input type="text" placeholder="Search Client" />
        <select><option>Client Type</option></select>
        <select><option>Assigned To</option></select>
        <input type="date" />
      </div>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.company}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.assignedTo}</td>
              <td>
                <span className="status-tag">{client.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>Previous</span>
        <span>1</span>
        <span>Next</span>
        <select>
          <option>10</option>
          <option>20</option>
        </select>
        <button className="export-btn">Export</button>
      </div>
    </div>
  );
};

export default Clients;
