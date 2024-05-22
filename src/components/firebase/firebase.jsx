import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chatter-6b456.firebaseapp.com",
  databaseURL: "https://chatter-6b456-default-rtdb.firebaseio.com",
  projectId: "chatter-6b456",
  storageBucket: "chatter-6b456.appspot.com",
  messagingSenderId: "462582875668",
  appId: "1:462582875668:web:976a99321d42901caa8901",
  measurementId: "G-M6MH6FYX52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// GOOGLE AUTH
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const authWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = await user.getIdToken(); //To retrieve the ID token
    // console.log("Firebase Google Auth Token:", token); // Log the token
    return { access_token: token }; // To return an object containing the token
  } catch (err) {
    console.log(err);
    throw new Error("Authentication failed!");
  }
};
