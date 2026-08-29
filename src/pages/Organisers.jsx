import '../styles/Organisers.css';

export default function Organisers() {
  const organisers = [
    {
      id: 1,
      name: 'Organiser 1',
      role: 'Community Coordinator',
      description: 'Leading community initiatives and volunteer programs',
      image: '/organiser1.jpg'
    },
    {
      id: 2,
      name: 'Organiser 2',
      role: 'Event Manager',
      description: 'Planning and executing volunteer events',
      image: '/organiser2.jpg'
    },
    {
      id: 3,
      name: 'Organiser 3',
      role: 'Operations Lead',
      description: 'Managing day-to-day operations and logistics',
      image: '/organiser3.jpg'
    },
  ];

  return (
    <div className="organisers-container">
      <h1>Our Organisers</h1>
      <p className="intro-text">
        Meet the dedicated team working to make Seva Setu a beacon of community service.
      </p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To organize and coordinate meaningful volunteer initiatives that strengthen communities
          and uphold the values of the Varkari tradition through dedicated service.
        </p>
      </section>

      <section className="organisers-grid">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {organisers.map((organiser) => (
            <div key={organiser.id} className="organiser-card">
              <div className="organiser-image">
                <img src={organiser.image} alt={organiser.name} />
              </div>
              <h3>{organiser.name}</h3>
              <p className="role">{organiser.role}</p>
              <p className="description">{organiser.description}</p>
              <button className="contact-button">Contact</button>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>Integrity</h4>
            <p>Acting with honesty and strong moral principles</p>
          </div>
          <div className="value-item">
            <h4>Compassion</h4>
            <p>Serving with empathy and genuine care for others</p>
          </div>
          <div className="value-item">
            <h4>Dedication</h4>
            <p>Committed to excellence in all our endeavors</p>
          </div>
        </div>
      </section>
    </div>
  );
}
