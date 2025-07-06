import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Leads from './pages/Leads';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Support from './pages/Support';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Topbar />
          <div style={{ padding: '20px', flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Leads" element={<Leads />} />
              <Route path="/Clients" element={<Clients />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Tasks" element={<Tasks />} />
              <Route path="/Support" element={<Support />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
