// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
//import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWap9py-ql9EfzVQvE2MIXbQXQhpgrmJ8",
  authDomain: "latest-tala.firebaseapp.com",
  projectId: "latest-tala",
  storageBucket: "latest-tala.firebasestorage.app",
  messagingSenderId: "609435370790",
  appId: "1:609435370790:web:2f19f4bd325e2165baede7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
//export const db = getFirestore(app);
//export const storage = getStorage(app);
