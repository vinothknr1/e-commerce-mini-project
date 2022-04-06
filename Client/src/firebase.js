import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA3GZuQ-0J8jBAKxaCyM8ebMrpm4P5E4Bs",
  authDomain: "ecommerce-fc6ab.firebaseapp.com",
  projectId: "ecommerce-fc6ab",
  storageBucket: "ecommerce-fc6ab.appspot.com",
  messagingSenderId: "792375470410",
  appId: "1:792375470410:web:485f1212c27cfd5224f9b3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
