// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: 'shopopedia-5bd89.firebaseapp.com',
  projectId: 'shopopedia-5bd89',
  storageBucket: 'shopopedia-5bd89.firebasestorage.app',
  messagingSenderId: '544104810199',
  appId: '1:544104810199:web:9c31e30e0046f6278fd292',
  measurementId: 'G-XNPRDL2V9B',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { app as firebaseApp, db }
