import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  doc,
  runTransaction,
  updateDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase";

// ======================================================
// REQUEST COLLECTION
// ======================================================

const requestsCollection = collection(db, "requests");

// ======================================================
// 1. CREATE REQUEST
// Warkari creates a request for help
// ======================================================

export const createRequest = async ({
  category,
  title,
  description,
  location,
  latitude,
  longitude,
  priority = "Medium",
  createdBy,
}) => {
  try {
    if (!createdBy) {
      throw new Error("User ID is required.");
    }

    const requestData = {
      category,
      title,
      description,
      location,

      // GPS coordinates
      latitude: latitude ?? null,
      longitude: longitude ?? null,

      priority,

      // Request lifecycle
      status: "pending",

      // Users
      createdBy,
      volunteerId: null,

      // Timestamps
      createdAt: serverTimestamp(),
      acceptedAt: null,
      completedAt: null,
      cancelledAt: null,
    };

    const requestRef = await addDoc(
      requestsCollection,
      requestData
    );

    console.log("✅ Request created:", requestRef.id);

    return requestRef.id;
  } catch (error) {
    console.error("❌ Error creating request:", error);
    throw error;
  }
};

// ======================================================
// 2. GET ALL PENDING REQUESTS
// Volunteer dashboard uses this
// Real-time updates
// ======================================================

export const subscribeToPendingRequests = (callback) => {
  const requestsQuery = query(
    requestsCollection,
    where("status", "==", "pending")
  );

  return onSnapshot(
    requestsQuery,
    (snapshot) => {
      const requests = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      callback(requests);
    },
    (error) => {
      console.error(
        "❌ Error listening to pending requests:",
        error
      );
    }
  );
};

// ======================================================
// 3. GET WARKARI'S REQUESTS
// Shows requests created by the logged-in Warkari
// ======================================================

export const subscribeToMyRequests = (
  userId,
  callback
) => {
  if (!userId) {
    console.error("User ID is required.");
    return () => {};
  }

  const requestsQuery = query(
    requestsCollection,
    where("createdBy", "==", userId)
  );

  return onSnapshot(
    requestsQuery,
    (snapshot) => {
      const requests = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      callback(requests);
    },
    (error) => {
      console.error(
        "❌ Error loading Warkari requests:",
        error
      );
    }
  );
};

// ======================================================
// 4. GET VOLUNTEER'S ASSIGNED REQUESTS
// ======================================================

export const subscribeToMyAssignedRequests = (
  volunteerId,
  callback
) => {
  if (!volunteerId) {
    console.error("Volunteer ID is required.");
    return () => {};
  }

  const requestsQuery = query(
    requestsCollection,
    where("volunteerId", "==", volunteerId)
  );

  return onSnapshot(
    requestsQuery,
    (snapshot) => {
      const requests = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      callback(requests);
    },
    (error) => {
      console.error(
        "❌ Error loading volunteer requests:",
        error
      );
    }
  );
};

// ======================================================
// 5. ACCEPT REQUEST
// Transaction prevents two volunteers from accepting
// the same request at the same time
// ======================================================

export const acceptRequest = async (
  requestId,
  volunteerId
) => {
  try {
    if (!requestId || !volunteerId) {
      throw new Error(
        "Request ID and Volunteer ID are required."
      );
    }

    const requestRef = doc(
      db,
      "requests",
      requestId
    );

    await runTransaction(
      db,
      async (transaction) => {
        const requestSnapshot =
          await transaction.get(requestRef);

        if (!requestSnapshot.exists()) {
          throw new Error(
            "Request does not exist."
          );
        }

        const requestData =
          requestSnapshot.data();

        if (requestData.status !== "pending") {
          throw new Error(
            "This request has already been accepted."
          );
        }

        transaction.update(requestRef, {
          status: "accepted",
          volunteerId,
          acceptedAt: serverTimestamp(),
        });
      }
    );

    console.log(
      "✅ Request accepted:",
      requestId
    );

    return true;
  } catch (error) {
    console.error(
      "❌ Error accepting request:",
      error
    );

    throw error;
  }
};

// ======================================================
// 6. COMPLETE REQUEST
// Volunteer marks the request as completed
// ======================================================

export const completeRequest = async (
  requestId
) => {
  try {
    const requestRef = doc(
      db,
      "requests",
      requestId
    );

    await updateDoc(requestRef, {
      status: "completed",
      completedAt: serverTimestamp(),
    });

    console.log(
      "✅ Request completed:",
      requestId
    );

    return true;
  } catch (error) {
    console.error(
      "❌ Error completing request:",
      error
    );

    throw error;
  }
};

// ======================================================
// 7. CANCEL REQUEST
// Warkari can cancel their request
// ======================================================

export const cancelRequest = async (
  requestId
) => {
  try {
    const requestRef = doc(
      db,
      "requests",
      requestId
    );

    await updateDoc(requestRef, {
      status: "cancelled",
      cancelledAt: serverTimestamp(),
    });

    console.log(
      "✅ Request cancelled:",
      requestId
    );

    return true;
  } catch (error) {
    console.error(
      "❌ Error cancelling request:",
      error
    );

    throw error;
  }
};

// ======================================================
// 8. UPDATE REQUEST LOCATION
// Useful if Warkari's location changes
// ======================================================

export const updateRequestLocation = async (
  requestId,
  latitude,
  longitude,
  location
) => {
  try {
    const requestRef = doc(
      db,
      "requests",
      requestId
    );

    await updateDoc(requestRef, {
      latitude,
      longitude,
      location,
      updatedAt: serverTimestamp(),
    });

    console.log(
      "✅ Request location updated:",
      requestId
    );
  } catch (error) {
    console.error(
      "❌ Error updating request location:",
      error
    );

    throw error;
  }
};

// ======================================================
// 9. CALCULATE DISTANCE
// Returns distance in kilometres
// ======================================================

export const calculateDistance = (
  lat1,
  lon1,
  lat2,
  lon2
) => {
  const earthRadius = 6371;

  const dLat =
    ((lat2 - lat1) * Math.PI) / 180;

  const dLon =
    ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return earthRadius * c;
};

// ======================================================
// 10. GET NEARBY PENDING REQUESTS
// Used by volunteers
//
// NOTE:
// Firestore doesn't directly calculate geographical
// distance. We fetch pending requests and filter them
// using the Haversine formula.
// ======================================================

export const getNearbyRequests = async (
  volunteerLatitude,
  volunteerLongitude,
  radiusKm = 5
) => {
  try {
    const requestsQuery = query(
      requestsCollection,
      where("status", "==", "pending")
    );

    const snapshot =
      await getDocs(requestsQuery);

    const nearbyRequests = [];

    snapshot.docs.forEach((document) => {
      const request = {
        id: document.id,
        ...document.data(),
      };

      if (
        request.latitude == null ||
        request.longitude == null
      ) {
        return;
      }

      const distance = calculateDistance(
        volunteerLatitude,
        volunteerLongitude,
        request.latitude,
        request.longitude
      );

      if (distance <= radiusKm) {
        nearbyRequests.push({
          ...request,
          distanceKm: Number(
            distance.toFixed(2)
          ),
        });
      }
    });

    // Nearest requests first
    nearbyRequests.sort(
      (a, b) =>
        a.distanceKm - b.distanceKm
    );

    return nearbyRequests;
  } catch (error) {
    console.error(
      "❌ Error finding nearby requests:",
      error
    );

    throw error;
  }
};