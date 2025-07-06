// pages/Leads.js
import './Leads.css'; // We'll create this for styles

const leadsData = [
  {
    name: "Aarav Sharma",
    email: "aarav@email.com",
    status: "New",
    updatedOn: "10 Sept",
    action: "Sending proposal",
  },
  {
    name: "Priya Singh",
    email: "priya@email.com",
    status: "In Progress",
    updatedOn: "Mohmad Ali",
    action: "Call follow-up",
  },
  {
    name: "Rohan Mehta",
    email: "rohan@gmail.com",
    status: "Completed",
    updatedOn: "25 Aug",
    action: "Investigate",
  },
  {
    name: "Mukund Shankar",
    email: "actions.user1@reply.in",
    status: "New",
    updatedOn: "17 Aug",
    action: "Meeting rescheduled",
  },
  {
    name: "Monica",
    email: "monica@univ.ac.in",
    status: "In Progress",
    updatedOn: "9 Aug",
    action: "Follow up next week",
  },
  {
    name: "Aditi",
    email: "aditi2001@work.com",
    status: "Open",
    updatedOn: "5 Aug",
    action: "Follow up next week",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "New": return "status new";
    case "In Progress": return "status in-progress";
    case "Completed": return "status completed";
    case "Open": return "status open";
    default: return "status";
  }
};

function Leads() {
  return (
    <div className="leads-container">
      <div className="leads-header">
        <h1>Leads</h1>
        <div className="leads-controls">
          <button className="btn-primary">Add New Lead</button>
          <button className="btn-secondary">Import CSV</button>
        </div>
      </div>
      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Updated On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead, idx) => (
              <tr key={idx}>
                <td><input type="checkbox" /></td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td><span className={getStatusClass(lead.status)}>{lead.status}</span></td>
                <td>{lead.updatedOn}</td>
                <td>{lead.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leads;
