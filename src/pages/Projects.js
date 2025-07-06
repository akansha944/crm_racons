import './Projects.css';

const projects = [
  {
    title: 'Doon One Hotel',
    status: 'In Progress',
    image: '/images/doon_one.jpg',
  },
  {
    title: 'Arjun Enclave Apartments',
    status: 'Completed',
    image: '/images/arjun_enclave.jpg',
  },
  {
    title: 'Apple Orchard',
    status: 'In Progress',
    image: '/images/apple_orchard.jpg',
  },
  {
    title: 'Wood House Resort and Cottages',
    status: 'On Hold',
    image: '/images/cottages.jpg',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
