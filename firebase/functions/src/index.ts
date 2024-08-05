import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, Messaging, getToken } from 'firebase/messaging';
import {  FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();

let messaging: Messaging | undefined;
if (typeof window !== "undefined") {
  messaging = getMessaging(app);
}

export { messaging };

export const requestForToken = async () => {
    try {
        if (typeof window !== 'undefined' && messaging) {
            const token = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY });
            if (token) {
              console.log('Current token for client: ', token);
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          }
    } catch (err) {
      console.error('An error occurred while retrieving token. ', err);
    }
  };
  