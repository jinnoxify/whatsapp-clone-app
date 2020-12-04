import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzFHJcRh_V-jC4IADiHw8YcU8t9VMFEIA",
  authDomain: "wpp-clone-e8b75.firebaseapp.com",
  projectId: "wpp-clone-e8b75",
  storageBucket: "wpp-clone-e8b75.appspot.com",
  messagingSenderId: "757280944680",
  appId: "1:757280944680:web:99161a0c3ea80d0f32bb1d",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
