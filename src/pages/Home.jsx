import '../styles/Home.css';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Seva Setu</h1>
        <p className="tagline">Building Bridges of Service and Community</p>
        <p className="description">
          Connecting volunteers with opportunities to serve their communities through
          meaningful initiatives rooted in the Varkari tradition of devotion and service.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Become a Volunteer</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="quick-nav">
        <div className="nav-grid">
          
          <div className="nav-card">
            <h3>👥 Organisers</h3>
            <p>Meet the dedicated team organizing and coordinating our initiatives.</p>
            <a href="/organisers" className="nav-link">Meet Team →</a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Seva Setu?</h2>
        <div className="features-grid">
          <div className="feature">
            <h4>Community Focused</h4>
            <p>We prioritize genuine community impact and sustainable change.</p>
          </div>
          <div className="feature">
            <h4>Easy Registration</h4>
            <p>Simple and quick process to start your volunteer journey with us.</p>
          </div>
          <div className="feature">
            <h4>Support & Guidance</h4>
            <p>Receive ongoing support from experienced organizers and mentors.</p>
          </div>
          <div className="feature">
            <h4>Flexibility</h4>
            <p>Choose opportunities that fit your schedule and interests.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Volunteers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Joining Seva Setu transformed my perspective on community service."</p>
            <span className="author">- Volunteer 1</span>
          </div>
          <div className="testimonial">
            <p>"The organizational team makes everything smooth and meaningful."</p>
            <span className="author">- Volunteer 2</span>
          </div>
          <div className="testimonial">
            <p>"I found my purpose and a wonderful community here."</p>
            <span className="author">- Volunteer 3</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get Started Today</h2>
        <p>Ready to make a difference? Join Seva Setu and start serving your community.</p>
        <button className="cta-large-btn">Register Now</button>
      </section>
    </div>
  );
}
