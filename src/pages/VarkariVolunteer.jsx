import '../styles/VarkariVolunteer.css';
import { useLanguage } from "../language/languageContext";
import { translations } from "../language/translations";

export default function VarkariVolunteer() {
 

  return (
    <div className="varkari-volunteer-container">
      <h1>{t.volunteer.title}</h1>
      <div className="volunteer-content">
        <section className="intro-section">
          <h2>{t.volunteer.intro}</h2>
          <p>{t.volunteer.introText}</p>
        </section>

        <section className="benefits-section">
          <h2>{t.volunteer.whyJoin}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>{t.volunteer.spiritualGrowth}</h3>
              <p>{t.volunteer.spiritualGrowthDesc}</p>
            </div>
            <div className="benefit-card">
              <h3>{t.volunteer.communityImpact}</h3>
              <p>{t.volunteer.communityImpactDesc}</p>
            </div>
            <div className="benefit-card">
              <h3>{t.volunteer.network}</h3>
              <p>{t.volunteer.networkDesc}</p>
            </div>
            <div className="benefit-card">
              <h3>{t.volunteer.skillsDev}</h3>
              <p>{t.volunteer.skillsDevDesc}</p>
            </div>
          </div>
        </section>

        <section className="how-to-join">
          <h2>{t.volunteer.getStarted}</h2>
          <ol>
            <li>{t.volunteer.step1}</li>
            <li>{t.volunteer.step2}</li>
            <li>{t.volunteer.step3}</li>
            <li>{t.volunteer.step4}</li>
          </ol>
        </section>

        <section className="cta-section">
          <button className="cta-button">{t.volunteer.registerVolunteer}</button>
        </section>
      </div>
    </div>
  );
}
