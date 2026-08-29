import { useEffect, useState } from 'react'
import './RouteMap.css'

export default function RouteMap({ onBack }) {
  const [location, setLocation] = useState(null)
  const [locationError, setLocationError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        'Location services are not supported by your browser.'
      )
      return
    }

    setIsLoading(true)
    setLocationError('')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        })

        setIsLoading(false)
      },

      (error) => {
        setIsLoading(false)

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              'Location permission was denied. Please allow location access.'
            )
            break

          case error.POSITION_UNAVAILABLE:
            setLocationError(
              'Your current location could not be determined.'
            )
            break

          case error.TIMEOUT:
            setLocationError(
              'Location request timed out. Please try again.'
            )
            break

          default:
            setLocationError(
              'Unable to get your current location.'
            )
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <main className="route-map-page">

      {/* ================= HEADER ================= */}

      <header className="route-map-header">

        <button
          className="route-back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div className="route-header-title">

          <div className="route-header-icon">
            📍
          </div>

          <div>

            <h1>
              Route Map
            </h1>

            <p>
              Navigate your Wari journey
            </p>

          </div>

        </div>

      </header>


      {/* ================= MAIN CONTENT ================= */}

      <div className="route-map-container">


        {/* ================= CURRENT LOCATION ================= */}

        <section className="location-status-card">

          <div className="location-status-icon">
            📍
          </div>

          <div className="location-status-content">

            <span>
              YOUR CURRENT LOCATION
            </span>

            {location ? (
              <>
                <h2>
                  Location detected
                </h2>

                <p>
                  Your GPS location is active.
                </p>
              </>
            ) : (
              <>
                <h2>
                  Detecting location...
                </h2>

                <p>
                  Please allow location access.
                </p>
              </>
            )}

          </div>

          <div className="location-live">

            {location ? (
              <>
                ● Live
              </>
            ) : (
              <>
                ● Waiting
              </>
            )}

          </div>

        </section>


        {/* ================= LOCATION DETAILS ================= */}

        {location && (

          <section className="coordinates-card">

            <div className="coordinates-heading">

              <h2>
                Your GPS Location
              </h2>

              <p>
                Your device's current coordinates.
              </p>

            </div>


            <div className="coordinates-grid">

              <div className="coordinate-item">

                <span>
                  Latitude
                </span>

                <strong>
                  {location.latitude.toFixed(6)}
                </strong>

              </div>


              <div className="coordinate-item">

                <span>
                  Longitude
                </span>

                <strong>
                  {location.longitude.toFixed(6)}
                </strong>

              </div>


              <div className="coordinate-item">

                <span>
                  Accuracy
                </span>

                <strong>
                  ±{Math.round(location.accuracy)} m
                </strong>

              </div>

            </div>

          </section>

        )}


        {/* ================= LOCATION ERROR ================= */}

        {locationError && (

          <section className="location-error-card">

            <div className="location-error-icon">
              ⚠️
            </div>

            <div>

              <h3>
                Location Access
              </h3>

              <p>
                {locationError}
              </p>

            </div>

          </section>

        )}


        {/* ================= MAP ================= */}

        <section className="map-section">

          <div className="map-heading">

            <h2>
              Wari Route
            </h2>

            <p>
              Important locations along your journey
            </p>

          </div>


          <div className="map-placeholder">

            <div className="map-route-line"></div>


            {/* ALANDI */}

            <div className="map-location location-one">

              <div className="map-marker completed">
                ✓
              </div>

              <div className="map-location-info">

                <strong>
                  Alandi
                </strong>

                <span>
                  Starting Point
                </span>

              </div>

            </div>


            {/* PUNE */}

            <div className="map-location location-two">

              <div className="map-marker completed">
                ✓
              </div>

              <div className="map-location-info">

                <strong>
                  Pune
                </strong>

                <span>
                  Completed
                </span>

              </div>

            </div>


            {/* CURRENT LOCATION */}

            <div className="map-location location-three">

              <div className="map-marker current">
                ●
              </div>

              <div className="map-location-info">

                <strong>
                  Your Location
                </strong>

                <span>
                  {location
                    ? 'You are here'
                    : 'Location unavailable'}
                </span>

              </div>

            </div>


            {/* DESTINATION */}

            <div className="map-location location-four">

              <div className="map-marker destination">
                🛕
              </div>

              <div className="map-location-info">

                <strong>
                  Vitthal Mandir
                </strong>

                <span>
                  Final Destination
                </span>

              </div>

            </div>


            {/* COMPASS */}

            <div className="map-compass">
              N
            </div>

          </div>


          {/* LOCATION BUTTON */}

          <button
            className="location-button"
            onClick={getCurrentLocation}
            disabled={isLoading}
          >

            {isLoading
              ? '📍 Detecting Location...'
              : '📍 Update My Location'}

          </button>

        </section>


        {/* ================= NEARBY PLACES ================= */}

        <section className="nearby-section">

          <div className="route-section-heading">

            <h2>
              Nearby Places
            </h2>

            <p>
              Useful facilities around your current location.
            </p>

          </div>


          <div className="nearby-grid">


            {/* MEDICAL */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby medical facilities will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                🏥
              </div>

              <div className="nearby-content">

                <h3>
                  Medical Help
                </h3>

                <p>
                  Find nearby medical assistance.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            {/* FOOD */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby food and water points will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                🍲
              </div>

              <div className="nearby-content">

                <h3>
                  Food & Water
                </h3>

                <p>
                  Find nearby food and water points.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            {/* REST AREAS */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby rest areas will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                🏕️
              </div>

              <div className="nearby-content">

                <h3>
                  Rest Areas
                </h3>

                <p>
                  Find nearby camps and rest areas.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            {/* TOILETS */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby toilet facilities will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                🚻
              </div>

              <div className="nearby-content">

                <h3>
                  Toilets
                </h3>

                <p>
                  Find nearby toilet facilities.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            {/* VOLUNTEERS */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby volunteers will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                🤝
              </div>

              <div className="nearby-content">

                <h3>
                  Volunteers
                </h3>

                <p>
                  Connect with nearby volunteers.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            {/* WARI CAMPS */}

            <button
              className="nearby-card"
              onClick={() =>
                alert(
                  'Nearby Wari camps will be connected soon.'
                )
              }
            >

              <div className="nearby-icon">
                ⛺
              </div>

              <div className="nearby-content">

                <h3>
                  Wari Camps
                </h3>

                <p>
                  Find registered Wari camps nearby.
                </p>

              </div>

              <span>
                →
              </span>

            </button>

          </div>

        </section>


        {/* ================= JOURNEY SUMMARY ================= */}

        <section className="route-summary">

          <div className="route-summary-icon">
            🛣️
          </div>

          <div className="route-summary-content">

            <span>
              YOUR JOURNEY
            </span>

            <h2>
              Alandi → Pandharpur
            </h2>

            <p>
              Continue following the designated Wari route
              and stay connected with your Dindi.
            </p>

          </div>

        </section>


        {/* ================= SAFETY NOTICE ================= */}

        <section className="route-safety">

          <div className="safety-icon">
            ⚠️
          </div>

          <div>

            <h3>
              Stay Safe
            </h3>

            <p>
              Follow official route instructions and avoid
              leaving the designated Wari path.
            </p>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="route-footer">

          <div>
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