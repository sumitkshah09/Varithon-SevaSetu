import '../styles/VarkariVolunteer.css';

export default function VarkariVolunteer() {
  return (
    <div className="varkari-volunteer-container">
      <h1>Varkari Volunteer</h1>
      <div className="volunteer-content">
        <section className="intro-section">
          <h2>Welcome to Varkari Volunteer Program</h2>
          <p>
            Join us in serving the community through the Varkari tradition of dedicated service.
            The Varkari movement, rooted in devotion and social responsibility, offers you an opportunity
            to contribute meaningfully to society.
          </p>
        </section>

        <section className="benefits-section">
          <h2>Why Join as a Varkari Volunteer?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Spiritual Growth</h3>
              <p>Connect with the spiritual essence of service and devotion.</p>
            </div>
            <div className="benefit-card">
              <h3>Community Impact</h3>
              <p>Make a real difference in the lives of those around you.</p>
            </div>
            <div className="benefit-card">
              <h3>Network</h3>
              <p>Build meaningful relationships with like-minded volunteers.</p>
            </div>
            <div className="benefit-card">
              <h3>Skills Development</h3>
              <p>Develop new skills through hands-on volunteer work.</p>
            </div>
          </div>
        </section>

        <section className="how-to-join">
          <h2>How to Get Started?</h2>
          <ol>
            <li>Fill out the volunteer registration form</li>
            <li>Participate in orientation program</li>
            <li>Choose your area of service</li>
            <li>Start your volunteer journey with us</li>
          </ol>
        </section>

        <section className="cta-section">
          <button className="cta-button">Register as Volunteer</button>
        </section>
      </div>
    </div>
  );
}
