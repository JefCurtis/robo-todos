import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD39Sm1aJ7KMo5QIZNvZVRh6iMt9bUJ0o8",
  authDomain: "realtime-todos-906eb.firebaseapp.com",
  databaseURL: "https://realtime-todos-906eb.firebaseio.com",
  projectId: "realtime-todos-906eb",
  storageBucket: "realtime-todos-906eb.appspot.com",
  messagingSenderId: "896440174848",
  appId: "1:896440174848:web:f15d9d3d79ccd3b175cbe5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
