import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// ======================================================
// GET CURRENT LOCATION
// Gets latitude and longitude from the user's device
// ======================================================

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    // Check if browser supports GPS
    if (!navigator.geolocation) {
      reject(
        new Error(
          "Geolocation is not supported by this browser."
        )
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("📍 Latitude:", latitude);
        console.log("📍 Longitude:", longitude);

        resolve({
          latitude,
          longitude,
        });
      },

      (error) => {
        console.error(
          "❌ Location error:",
          error.message
        );

        reject(error);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};


// ======================================================
// SAVE USER LOCATION
// Saves the user's current location in Firestore
// ======================================================

export const updateUserLocation = async (
  userId,
  latitude,
  longitude
) => {
  try {
    if (!userId) {
      throw new Error("User ID is required.");
    }

    await updateDoc(
      doc(db, "users", userId),
      {
        latitude,
        longitude,
      }
    );

    console.log("✅ User location saved.");

  } catch (error) {
    console.error(
      "❌ Error saving user location:",
      error
    );

    throw error;
  }
};