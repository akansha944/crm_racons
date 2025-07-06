import './Reports.css';
import { FunnelChart, Funnel, LabelList, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, Tooltip } from 'recharts';

const funnelData = [
  { stage: 'Leads', value: 500 },
  { stage: 'Contacted', value: 300 },
  { stage: 'Proposal Sent', value: 150 },
  { stage: 'Converted', value: 80 },
];

const lineData = [
  { month: 'Jan', revenue: 3000 },
  { month: 'Feb', revenue: 4000 },
  { month: 'Mar', revenue: 4200 },
  { month: 'Apr', revenue: 4800 },
  { month: 'May', revenue: 4600 },
  { month: 'Jun', revenue: 5000 },
];

const pieData = [
  { name: 'Resolved', value: 45 },
  { name: 'Open', value: 25 },
  { name: 'In Progress', value: 17 },
];

const barData = [
  { name: 'Resolved', count: 45 },
  { name: 'Open', count: 25 },
  { name: 'In Progress', count: 17 },
];

const COLORS = ['#4caf50', '#fbc02d', '#2196f3'];

const Reports = () => {
  return (
    <div className="reports-container">
      <h1>Reports</h1>

      {/* Filters */}
      <div className="filters">
        <select><option>This Month</option></select>
        <select><option>Agent</option></select>
        <select><option>Report Type</option></select>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <div className="card-title">Leads Generated</div>
          <div className="card-value">320</div>
          <div className="card-change positive">+15%</div>
        </div>
        <div className="card">
          <div className="card-title">Revenue</div>
          <div className="card-value">₹4.8 Crore</div>
          <div className="card-change positive">+8%</div>
        </div>
        <div className="card">
          <div className="card-title">Support Tickets</div>
          <div className="card-value">87</div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart-box">
          <h3>Leads Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={250}>
            <FunnelChart>
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                <LabelList dataKey="stage" position="right" fill="#000" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Revenue Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <Line type="monotone" dataKey="revenue" stroke="#1e88e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Support Performance</h3>
          <div className="support-visuals">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="50%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#1e88e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
