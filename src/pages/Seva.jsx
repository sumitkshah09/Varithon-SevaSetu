import { useState } from 'react'
import SevaRegistration from './SevaRegistration'
import './Seva.css'

export default function Seva({ onBack }) {
  const [selectedSeva, setSelectedSeva] = useState(null)

  const sevaOpportunities = [
    {
      id: 1,
      icon: '🍲',
      title: 'Food & Water Seva',
      description:
        'Help provide meals and clean drinking water to Warkaris during the Yatra.',
      tag: 'Community Support'
    },
    {
      id: 2,
      icon: '🏥',
      title: 'Medical Seva',
      description:
        'Support medical teams and help Warkaris who need medical assistance.',
      tag: 'Health & Safety'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Volunteer Seva',
      description:
        'Guide, assist and support fellow Warkaris throughout their journey.',
      tag: 'Volunteer Support'
    },
    {
      id: 4,
      icon: '🧹',
      title: 'Cleanliness Seva',
      description:
        'Help maintain cleanliness at camps, rest areas and along the Wari route.',
      tag: 'Clean Wari'
    },
    {
      id: 5,
      icon: '🏕️',
      title: 'Camp Seva',
      description:
        'Assist with Wari camps, accommodation and facilities for pilgrims.',
      tag: 'Camp Support'
    },
    {
      id: 6,
      icon: '📢',
      title: 'Information Seva',
      description:
        'Help Warkaris with directions, schedules, announcements and useful information.',
      tag: 'Information'
    }
  ]

  if (selectedSeva) {
    return (
      <SevaRegistration
        seva={selectedSeva}
        onBack={() => setSelectedSeva(null)}
      />
    )
  }

  return (
    <main className="seva-page">

      {/* HEADER */}
      <header className="seva-header">

        <button
          type="button"
          className="seva-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="seva-header-title">

          <div className="seva-header-icon">
            🤝
          </div>

          <div>
            <h1>Seva</h1>
            <p>Serve the Wari community</p>
          </div>

        </div>

      </header>


      {/* MAIN */}
      <div className="seva-container">

        {/* HERO */}
        <section className="seva-hero">

          <div className="seva-hero-content">

            <span className="seva-eyebrow">
              SEVA SETU
            </span>

            <h2>
              Serve with devotion.
            </h2>

            <p>
              Every helping hand makes the Wari journey
              safer, easier and more meaningful for everyone.
            </p>

          </div>

          <div className="seva-hero-symbol">
            🙏
          </div>

        </section>


        {/* OPPORTUNITIES */}
        <section className="seva-opportunities-section">

          <div className="seva-section-heading">

            <span>
              MAKE A DIFFERENCE
            </span>

            <h2>
              Seva Opportunities
            </h2>

            <p>
              Choose a seva and contribute to the Wari community.
            </p>

          </div>


          <div className="seva-grid">

            {sevaOpportunities.map((seva) => (

              <button
                type="button"
                className="seva-card"
                key={seva.id}
                onClick={() => setSelectedSeva(seva)}
              >

                <div className="seva-card-top">

                  <div className="seva-card-icon">
                    {seva.icon}
                  </div>

                  <span className="seva-card-arrow">
                    →
                  </span>

                </div>

                <span className="seva-card-tag">
                  {seva.tag}
                </span>

                <h3>
                  {seva.title}
                </h3>

                <p>
                  {seva.description}
                </p>

                <div className="seva-card-action">
                  Register for Seva
                  <span>→</span>
                </div>

              </button>

            ))}

          </div>

        </section>


        {/* HOW SEVA WORKS */}
        <section className="how-seva-section">

          <div className="how-seva-heading">

            <span>
              SIMPLE & MEANINGFUL
            </span>

            <h2>
              How Seva Works
            </h2>

            <p>
              Start serving in just a few simple steps.
            </p>

          </div>


          <div className="seva-steps">

            <div className="seva-step">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                👆
              </div>

              <h3>
                Choose
              </h3>

              <p>
                Select a seva opportunity that you would like
                to participate in.
              </p>

            </div>


            <div className="seva-step">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                📝
              </div>

              <h3>
                Register
              </h3>

              <p>
                Share your details and let the organizers know
                that you are interested.
              </p>

            </div>


            <div className="seva-step">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                🤝
              </div>

              <h3>
                Serve
              </h3>

              <p>
                Connect with the team and contribute to the
                Wari community.
              </p>

            </div>

          </div>

        </section>


        {/* MY SEVA */}
        <section className="my-seva-section">

          <div className="my-seva-card">

            <div className="my-seva-icon">
              🙏
            </div>

            <div className="my-seva-content">

              <span>
                YOUR SEVA
              </span>

              <h2>
                Ready to serve?
              </h2>

              <p>
                Your registered seva opportunities and
                participation details will appear here.
              </p>

            </div>

            <div className="my-seva-status">

              <span className="status-dot"></span>

              No active seva

            </div>

          </div>

        </section>


        {/* MOTIVATION */}
        <section className="seva-motivation">

          <div className="motivation-decoration">
            ✦
          </div>

          <div className="motivation-icon">
            🤲
          </div>

          <h2>
            Seva is a form of Bhakti
          </h2>

          <p>
            सेवा • भक्ती • समाज
          </p>

          <span>
            Together, let us make the Wari journey better
            for every Warkari.
          </span>

        </section>


        {/* FOOTER */}
        <footer className="seva-footer">

          <div className="seva-footer-symbol">
            🙏
          </div>

          <h3>
            Jai Hari Vitthal
          </h3>

          <p>
            Seva • Bhakti • Samaj
          </p>

        </footer>

      </div>

    </main>
  )
}