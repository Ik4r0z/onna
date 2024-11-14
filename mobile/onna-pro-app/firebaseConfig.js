// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage"

import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjvbXkW9gSbWOdUIe_arNjjKyyzvASawI",
  authDomain: "onna-chat.firebaseapp.com",
  projectId: "onna-chat",
  storageBucket: "onna-chat.firebasestorage.app",
  messagingSenderId: "798933079466",
  appId: "1:798933079466:web:6061a65682612685eb47d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

export const usersRef = collection(db, "@users")
export const roomRef = collection(db, "@rooms")