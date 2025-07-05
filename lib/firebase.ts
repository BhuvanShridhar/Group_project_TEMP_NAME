import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANIq2xkC0gPP9XD-VcC0ftrY_B_TaBCYU",
  authDomain: "boysproject-6e53f.firebaseapp.com",
  projectId: "boysproject-6e53f",
  storageBucket: "boysproject-6e53f.firebasestorage.app",
  messagingSenderId: "144804608650",
  appId: "1:144804608650:web:90e93cd51b9ab81567cb73",
  measurementId: "G-BRE2FE56HV",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export default app
