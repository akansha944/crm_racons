import './Support.css';

const tickets = [
  { id: '#1023', subject: 'Login issue', client: 'Priya Singh', status: 'Open', date: '21 Aug 2025' },
  { id: '#1022', subject: 'Update not saving', client: 'Rohan Gupta', status: 'In Progress', date: '20 Aug 2025' },
  { id: '#1023', subject: 'Billing question', client: 'Harini Kumar', status: 'Medium', date: '19 Aug 2025' },
  { id: '#1020', subject: 'Password reset', client: 'Vikas Joshi', status: 'Low', date: '18 Aug 2025' },
];

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Support</h1>
        <button className="new-ticket-button">+ New Ticket</button>
      </div>

      <div className="filters">
        <input type="text" placeholder="Search by subject or ticket ID" />
        <select>
          <option>Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
        <select>
          <option>Category</option>
          <option>Bug</option>
          <option>Account</option>
          <option>Billing</option>
        </select>
        <button className="reset-button">Reset</button>
      </div>

      <table className="ticket-table">
        <thead>
          <tr>
            <th></th>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Client Name</th>
            <th>Status</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.client}</td>
              <td><span className={`status-tag ${ticket.status.toLowerCase().replace(' ', '-')}`}>{ticket.status}</span></td>
              <td>{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Support;
