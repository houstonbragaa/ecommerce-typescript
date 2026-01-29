import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDM1cDF19BYLpibBv5f-WMhNYmMwAUogyA',
  authDomain: 'ecommerce-x-23610.firebaseapp.com',
  projectId: 'ecommerce-x-23610',
  storageBucket: 'ecommerce-x-23610.firebasestorage.app',
  messagingSenderId: '551343058482',
  appId: '1:551343058482:web:c07b32c9bee976e562962b',
  measurementId: 'G-0ZH8NES18B',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
