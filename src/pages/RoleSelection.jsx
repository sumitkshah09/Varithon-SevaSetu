import { useState } from 'react'
import { useLanguage } from '../language/languageContext'
import { translations } from '../language/translations'

import VolunteerLogin from './VolunteerLogin'
import WarkariLogin from './WarkariLogin'
import OrganizerLogin from './OrganizerLogin'
import OrganizerDashboard from './OrganizerDashboard'

import './RoleSelection.css'

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null)

  const { language } = useLanguage()
  const t = translations[language]

  // -------------------------
  // VOLUNTEER
  // -------------------------
  if (selectedRole === 'volunteer') {
    return <VolunteerLogin />
  }

// -------------------------
// ORGANIZER DASHBOARD
// -------------------------
if (selectedRole === 'organizer-dashboard') {
  return <OrganizerDashboard />
}

// -------------------------
// ORGANIZER LOGIN
// -------------------------
if (selectedRole === 'organizer') {
  return (
    <OrganizerLogin
      onBack={() => setSelectedRole(null)}
      onLogin={() => {
        console.log('ORGANIZER LOGIN SUCCESS')
        setSelectedRole('organizer-dashboard')
      }}
    />
  )
}

  // -------------------------
  // WARKARI LOGIN
  // -------------------------
  if (selectedRole === 'warkari') {
    return (
      <WarkariLogin
        onBack={() => setSelectedRole(null)}
      />
    )
  }

  // -------------------------
  // ROLE SELECTION PAGE
  // -------------------------
  return (
    <main className="role-page">

      <div className="role-switcher">
        
      </div>

      <div className="role-header">

        <span className="logo-mark">
          🙏
        </span>

        <h1>
          {language === 'mr'
            ? 'सेवा सेतूमध्ये आपले स्वागत आहे'
            : language === 'hi'
              ? 'सेवा सेतु में आपका स्वागत है'
              : 'Welcome to Seva Setu'}
        </h1>

        <p>
          {language === 'mr'
            ? 'सेवेच्या प्रवासासाठी आपली भूमिका निवडा.'
            : language === 'hi'
              ? 'अपनी सेवा यात्रा शुरू करने के लिए अपनी भूमिका चुनें।'
              : 'Choose your role to begin your journey of seva.'}
        </p>

      </div>

      <div className="roles">

        {/* ORGANIZER */}

        <div className="role-card">

          <div className="role-icon">
            🏛️
          </div>

          <h2>
            {language === 'mr'
              ? 'संगठक'
              : language === 'hi'
                ? 'आयोजक'
                : 'Organizer'}
          </h2>

          <p>
            {language === 'mr'
              ? 'वारीचे व्यवस्थापन करा आणि स्वयंसेवकांचे समन्वय साधा.'
              : language === 'hi'
                ? 'वारी का प्रबंधन करें और स्वयंसेवकों का समन्वय करें।'
                : 'Manage Wari operations and coordinate volunteers.'}
          </p>

          <button
            onClick={() => setSelectedRole('organizer')}
          >
            {language === 'mr'
              ? 'संगठक म्हणून पुढे जा'
              : language === 'hi'
                ? 'आयोजक के रूप में आगे बढ़ें'
                : 'Continue as Organizer'}
          </button>

        </div>


        {/* WARKARI */}

        <div className="role-card">

          <div className="role-icon">
            🙏
          </div>

          <h2>
            {language === 'mr'
              ? 'वारकरी'
              : language === 'hi'
                ? 'वारकरी'
                : 'Warkari'}
          </h2>

          <p>
            {language === 'mr'
              ? 'तुमच्या वारीच्या प्रवासात मदत, सेवा आणि सहाय्य मिळवा.'
              : language === 'hi'
                ? 'अपनी वारी यात्रा के दौरान मदद, सेवाएं और सहायता प्राप्त करें।'
                : 'Find help, services and assistance throughout your Wari journey.'}
          </p>

          <button
            onClick={() => setSelectedRole('warkari')}
          >
            {language === 'mr'
              ? 'वारकरी म्हणून पुढे जा'
              : language === 'hi'
                ? 'वारकरी के रूप में आगे बढ़ें'
                : 'Continue as Warkari'}
          </button>

        </div>


        {/* VOLUNTEER */}

        <div className="role-card">

          <div className="role-icon">
            🤝
          </div>

          <h2>
            {language === 'mr'
              ? 'स्वयंसेवक'
              : language === 'hi'
                ? 'स्वयंसेवक'
                : 'Volunteer'}
          </h2>

          <p>
            {language === 'mr'
              ? 'तुमचा वेळ, कौशल्य आणि सेवा इतर वारकऱ्यांना मदत करण्यासाठी द्या.'
              : language === 'hi'
                ? 'अपने समय, कौशल और सेवा से साथी वारकरियों की सहायता करें।'
                : 'Offer your time, skills and seva to support fellow Warkaris.'}
          </p>

          <button
            onClick={() => setSelectedRole('volunteer')}
          >
            {language === 'mr'
              ? 'स्वयंसेवक म्हणून पुढे जा'
              : language === 'hi'
                ? 'स्वयंसेवक के रूप में आगे बढ़ें'
                : 'Continue as Volunteer'}
          </button>

        </div>

      </div>


      <p className="role-footer">
        {language === 'mr'
          ? 'वारीच्या प्रत्येक पावलावर सेवा.'
          : language === 'hi'
            ? 'वारी के हर कदम पर सेवा।'
            : 'Seva through every step of the Wari.'}
      </p>

    </main>
  )
}
