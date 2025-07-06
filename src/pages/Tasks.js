// pages/Tasks.js
import './Tasks.css';

const tasks = [
  { id: 1, title: "Call Riva for Flat 102", assignee: "Akansha", date: "21 Aug", status: "To Do", priority: "High" },
  { id: 2, title: "Follow up with Kumar on payment", assignee: "John", date: "23 Aug", status: "To Do", priority: "High" },
  { id: 3, title: "Prepare brochure for Villas E2", assignee: "Sneha", date: "25 Aug", status: "To Do", priority: "Low" },
  { id: 4, title: "Schedule site visit for Greenspace B4", assignee: "Anuj", date: "19 Aug", status: "In Progress", priority: "High" },
  { id: 5, title: "Verify documents for Cottages A1", assignee: "Priya", date: "22 Aug", status: "In Progress", priority: "High" },
  { id: 6, title: "Call Ramesh reschedule meeting", assignee: "Vijay", date: "18 Aug", status: "Done", priority: "Medium" },
];

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High": return "badge high";
    case "Medium": return "badge medium";
    case "Low": return "badge low";
    default: return "badge";
  }
};

const TaskCard = ({ task }) => (
  <div className="task-card">
    <input type="checkbox" />
    <p className="task-title">{task.title}</p>
    <p className="task-meta">👤 {task.assignee}</p>
    <div className="task-footer">
      <span className={getPriorityClass(task.priority)}>{task.priority}</span>
      <span className="task-date">{task.date}</span>
    </div>
  </div>
);

function Tasks() {
  const groupedTasks = {
    "To Do": tasks.filter(task => task.status === "To Do"),
    "In Progress": tasks.filter(task => task.status === "In Progress"),
    "Done": tasks.filter(task => task.status === "Done"),
  };

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1>Tasks</h1>
        <div className="tasks-controls">
          <input className="task-search" type="text" placeholder="🔍 Search tasks" />
          <select><option>All</option></select>
          <select><option>Status</option></select>
          <select><option>Priority</option></select>
          <button className="btn-add">Add Task</button>
          <button className="btn-reset">Reset</button>
        </div>
      </div>

      <div className="tasks-columns">
        {["To Do", "In Progress", "Done"].map(col => (
          <div className="task-column" key={col}>
            <h3>{col}</h3>
            {groupedTasks[col].map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
