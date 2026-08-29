import { useState } from 'react'

import RoleSelection from './pages/RoleSelection'
import WarkariDashboard from './pages/WarkariDashboard'
import VolunteerDashboard from './pages/VolunteerDashboard'
import OrganizerDashboard from './pages/OrganizerDashboard'

import './App.css'


function App() {

  const [selectedRole, setSelectedRole] = useState(null)


  if (selectedRole === 'volunteer') {
    return <VolunteerDashboard />
  }


  if (selectedRole === 'warkari') {
    return <WarkariDashboard />
  }


  if (selectedRole === 'organiser') {
    return <OrganizerDashboard />
  }


  return (
    <RoleSelection
      onSelectRole={setSelectedRole}
    />
  )
}


export default App