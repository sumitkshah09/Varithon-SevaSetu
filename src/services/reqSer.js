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
} from "firebase/firestore";

import { db } from "../firebase";


// ======================================================
// 1. CREATE A NEW REQUEST
// Warkari uses this when they ask for help
// ======================================================

export const createRequest = async ({
  category,
  title,
  description,
  location,
  priority,
  createdBy,
}) => {
  try {
    const requestData = {
      category,
      title,
      description,
      location,
      priority,

      // Initial status
      status: "pending",

      // Warkari UID
      createdBy,

      // No volunteer assigned initially
      volunteerId: null,

      // Firebase server time
      createdAt: serverTimestamp(),
    };

    const requestRef = await addDoc(
      collection(db, "requests"),
      requestData
    );

    console.log("Request created:", requestRef.id);

    return requestRef.id;

  } catch (error) {
    console.error("Error creating request:", error);
    throw error;
  }
};


// ======================================================
// 2. GET PENDING REQUESTS
// Volunteer uses this to see available requests
// Updates automatically when Firestore changes
// ======================================================

export const subscribeToPendingRequests = (callback) => {
  try {
    const requestsQuery = query(
      collection(db, "requests"),
      where("status", "==", "pending")
    );

    const unsubscribe = onSnapshot(
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
          "Error listening to requests:",
          error
        );
      }
    );

    return unsubscribe;

  } catch (error) {
    console.error(
      "Error subscribing to requests:",
      error
    );
    throw error;
  }
};


// ======================================================
// 3. ACCEPT REQUEST
// Volunteer uses this to accept a request
// Transaction prevents two volunteers taking the same request
// ======================================================

export const acceptRequest = async (
  requestId,
  volunteerId
) => {
  try {

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

        // Request doesn't exist
        if (!requestSnapshot.exists()) {
          throw new Error(
            "Request does not exist."
          );
        }

        const requestData =
          requestSnapshot.data();

        // Someone already accepted it
        if (requestData.status !== "pending") {
          throw new Error(
            "This request has already been accepted."
          );
        }

        // Assign volunteer
        transaction.update(requestRef, {
          status: "accepted",
          volunteerId: volunteerId,
          acceptedAt: serverTimestamp(),
        });
      }
    );

    console.log(
      "Request accepted:",
      requestId
    );

  } catch (error) {
    console.error(
      "Error accepting request:",
      error
    );

    throw error;
  }
};


// ======================================================
// 4. COMPLETE REQUEST
// Volunteer uses this after helping the Warkari
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
      "Request completed:",
      requestId
    );

  } catch (error) {
    console.error(
      "Error completing request:",
      error
    );

    throw error;
  }
};