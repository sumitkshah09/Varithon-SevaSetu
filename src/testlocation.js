import { getCurrentLocation } from "./services/locationService";

getCurrentLocation()
  .then((location) => {
    console.log("✅ CURRENT LOCATION:");
    console.log(location);
  })
  .catch((error) => {
    console.error(
      "❌ Could not get location:",
      error.message
    );
  });