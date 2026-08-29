import { useEffect, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet'

import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import './RouteMap.css'


/* ======================================================
   FIX LEAFLET DEFAULT MARKER ICONS
====================================================== */

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',

  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',

  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})


/* ======================================================
   WARI LOCATIONS
====================================================== */

const ALANDI = [18.6776, 73.8957]

const PUNE = [18.5204, 73.8567]

const PANDHARPUR = [17.6746, 75.3237]

const VITTHAL_MANDIR = [17.6715, 75.3243]


/* ======================================================
   FOLLOW USER LOCATION
====================================================== */

function FollowUser({ location }) {

  const map = useMap()

  useEffect(() => {

    if (!location) {
      return
    }

    map.setView(
      [location.latitude, location.longitude],
      15,
      {
        animate: true,
      }
    )

  }, [location, map])

  return null
}


/* ======================================================
   LIVE USER ICON
====================================================== */

const userIcon = L.divIcon({

  className: 'user-location-marker',

  html: `
    <div class="user-location-dot">
      <div class="user-location-pulse"></div>
    </div>
  `,

  iconSize: [30, 30],

  iconAnchor: [15, 15],
})


/* ======================================================
   DESTINATION ICON
====================================================== */

const destinationIcon = L.divIcon({

  className: 'destination-marker',

  html: `
    <div class="destination-marker-inner">
      🛕
    </div>
  `,

  iconSize: [40, 40],

  iconAnchor: [20, 40],
})


/* ======================================================
   ROUTE MAP
====================================================== */

export default function RouteMap({ onBack }) {

  const [location, setLocation] = useState(null)

  const [locationError, setLocationError] = useState('')

  const [isLoading, setIsLoading] = useState(true)


  /* ======================================================
     LIVE GPS TRACKING
  ====================================================== */

  useEffect(() => {

    if (!navigator.geolocation) {

      setLocationError(
        'Location services are not supported by your browser.'
      )

      setIsLoading(false)

      return
    }


    const watchId = navigator.geolocation.watchPosition(

      (position) => {

        setLocation({

          latitude: position.coords.latitude,

          longitude: position.coords.longitude,

          accuracy: position.coords.accuracy,

        })

        setLocationError('')

        setIsLoading(false)

      },


      (error) => {

        setIsLoading(false)

        switch (error.code) {

          case error.PERMISSION_DENIED:

            setLocationError(
              'Location permission was denied. Please allow location access in your browser settings.'
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

        timeout: 15000,

        maximumAge: 5000,
      }
    )


    return () => {

      navigator.geolocation.clearWatch(watchId)

    }

  }, [])


  /* ======================================================
     MANUAL LOCATION UPDATE
  ====================================================== */

  const updateLocation = () => {

    if (!navigator.geolocation) {

      setLocationError(
        'Location services are not supported by your browser.'
      )

      return
    }


    setIsLoading(true)

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation({

          latitude: position.coords.latitude,

          longitude: position.coords.longitude,

          accuracy: position.coords.accuracy,

        })

        setLocationError('')

        setIsLoading(false)

      },


      (error) => {

        setIsLoading(false)

        if (error.code === error.PERMISSION_DENIED) {

          setLocationError(
            'Location permission was denied. Please allow location access.'
          )

        } else {

          setLocationError(
            'Unable to update your location. Please try again.'
          )

        }

      },


      {
        enableHighAccuracy: true,

        timeout: 15000,

        maximumAge: 0,
      }
    )

  }


  /* ======================================================
     WARI ROUTE
  ====================================================== */

  const journeyRoute = [

    ALANDI,

    PUNE,

    PANDHARPUR,

    VITTHAL_MANDIR,

  ]


  /* ======================================================
     DEFAULT MAP POSITION
  ====================================================== */

  const defaultCenter = location

    ? [
        location.latitude,
        location.longitude,
      ]

    : PANDHARPUR


  return (

    <main className="route-map-page">


      {/* ==================================================
         HEADER
      ================================================== */}

      <header className="route-map-header">

        <button
          type="button"
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
              Live map for your Wari journey
            </p>

          </div>

        </div>

      </header>


      {/* ==================================================
         MAIN CONTENT
      ================================================== */}

      <div className="route-map-container">


        {/* ==================================================
           LOCATION STATUS
        ================================================== */}

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
                  Live Location Active
                </h2>

                <p>
                  Your position is updating automatically.
                </p>

              </>

            ) : (

              <>

                <h2>
                  {isLoading
                    ? 'Detecting location...'
                    : 'Location unavailable'}
                </h2>

                <p>
                  Please allow location access.
                </p>

              </>

            )}

          </div>


          <div className="location-live">

            {location
              ? '● Live'
              : '● Waiting'}

          </div>

        </section>


        {/* ==================================================
           LOCATION ERROR
        ================================================== */}

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


        {/* ==================================================
           REAL MAP
        ================================================== */}

        <section className="map-section">

          <div className="map-heading">

            <h2>
              Live Wari Map
            </h2>

            <p>
              See your actual location and journey route.
            </p>

          </div>


          <div className="real-map-container">

            <MapContainer
              center={defaultCenter}
              zoom={12}
              scrollWheelZoom={true}
              className="real-leaflet-map"
            >


              {/* ==================================================
                 OPENSTREETMAP
              ================================================== */}

              <TileLayer

                attribution='&copy; OpenStreetMap contributors'

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

              />


              {/* ==================================================
                 FOLLOW LIVE LOCATION
              ================================================== */}

              <FollowUser
                location={location}
              />


              {/* ==================================================
                 WARI ROUTE
              ================================================== */}

              <Polyline
                positions={journeyRoute}
                pathOptions={{
                  color: '#e07a2d',
                  weight: 5,
                  opacity: 0.8,
                }}
              />


              {/* ==================================================
                 ALANDI
              ================================================== */}

              <Marker position={ALANDI}>

                <Popup>

                  <strong>
                    Alandi
                  </strong>

                  <br />

                  Starting Point

                </Popup>

              </Marker>


              {/* ==================================================
                 PUNE
              ================================================== */}

              <Marker position={PUNE}>

                <Popup>

                  <strong>
                    Pune
                  </strong>

                  <br />

                  Journey Point

                </Popup>

              </Marker>


              {/* ==================================================
                 PANDHARPUR
              ================================================== */}

              <Marker position={PANDHARPUR}>

                <Popup>

                  <strong>
                    Pandharpur
                  </strong>

                  <br />

                  Yatra Area

                </Popup>

              </Marker>


              {/* ==================================================
                 VITTHAL MANDIR
              ================================================== */}

              <Marker
                position={VITTHAL_MANDIR}
                icon={destinationIcon}
              >

                <Popup>

                  <strong>
                    Shri Vitthal Rukmini Mandir
                  </strong>

                  <br />

                  Final Destination

                </Popup>

              </Marker>


              {/* ==================================================
                 LIVE USER LOCATION
              ================================================== */}

              {location && (

                <Marker

                  position={[
                    location.latitude,
                    location.longitude,
                  ]}

                  icon={userIcon}

                >

                  <Popup>

                    <strong>
                      You are here
                    </strong>

                    <br />

                    Live GPS location

                    <br />

                    Accuracy: ±
                    {Math.round(location.accuracy)}
                    m

                  </Popup>

                </Marker>

              )}

            </MapContainer>

          </div>


          {/* ==================================================
             LOCATION BUTTON
          ================================================== */}

          <button
            type="button"
            className="location-button"
            onClick={updateLocation}
            disabled={isLoading}
          >

            {isLoading
              ? '📍 Detecting Location...'
              : '📍 Find My Location'}

          </button>

        </section>


        {/* ==================================================
           GPS DETAILS
        ================================================== */}

        {location && (

          <section className="coordinates-card">

            <div className="coordinates-heading">

              <h2>
                Live GPS Details
              </h2>

              <p>
                Your device's current location.
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


        {/* ==================================================
           NEARBY PLACES
        ================================================== */}

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
              type="button"
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


            {/* FOOD & WATER */}

            <button
              type="button"
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
              type="button"
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
              type="button"
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
              type="button"
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
              type="button"
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


        {/* ==================================================
           JOURNEY SUMMARY
        ================================================== */}

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


        {/* ==================================================
           SAFETY NOTICE
        ================================================== */}

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


        {/* ==================================================
           FOOTER
        ================================================== */}

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