// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVwn-aUw7HmO6FLIvn58YYfC1dvT_EmFI",
  authDomain: "speakapp-d4970.firebaseapp.com",
  projectId: "speakapp-d4970",
  storageBucket: "speakapp-d4970.appspot.com",
  messagingSenderId: "82803959843",
  appId: "1:82803959843:web:0cb499d4a03510346a6996",
  measurementId: "G-EMQNSWP8RS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;