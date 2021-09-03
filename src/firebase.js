
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

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
const analytics = getAnalytics(app);

export default analytics;