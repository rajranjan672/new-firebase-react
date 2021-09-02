// // import * from './google-services.json';

// // const functions = require("firebase");

// // const admin = require("firebase-admin");
// // const firebaseapp =admin.initializeApp();

// // const firebase= firestore.firebaseapp();

// // export default firebase;
// import "@google-cloud/firestore"
//  var admin = require("firebase-admin");


//  var serviceAccount = require("path/to/serviceAccountKey.json");

//  admin.initializeApp({
//    credential: admin.credential.cert(serviceAccount)
//  });

//  export default serviceAccount;

import { initializeApp} from 'firebase/app';
import {getAnalytics} from "firebase/analytics";

 const config = {
     apiKey: "AIzaSyDVwn-aUw7HmO6FLIvn58YYfC1dvT_EmFI",
     authDomain: "firebase-adminsdk-ww672@speakapp-d4970.iam.gserviceaccount.com",
     projectId: "speakapp-d4970",
     storageId: "speakapp-d4970.appspot.com",
     messagingSenderId: "82803959843",
     appId: "1:82803959843:android:4c3f124089183c986a6996"
 };
 const app= initializeApp(config);

const analytics = getAnalytics(app);
export default analytics;