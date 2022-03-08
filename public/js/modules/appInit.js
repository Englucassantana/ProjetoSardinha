// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskuOx6-nGyY6VY0zKS5NHCe2WJ--fGIc",
  authDomain: "projeto-sardinha-testes.firebaseapp.com",
  projectId: "projeto-sardinha-testes",
  storageBucket: "projeto-sardinha-testes.appspot.com",
  messagingSenderId: "1040596546467",
  appId: "1:1040596546467:web:35a1f62aa29798f45d2016",
  measurementId: "G-X282B6GBYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = getFirestore();
const collectionName = "simpleSignals"

const querySnapshot = await getDocs(collection(db, collectionName));
querySnapshot.forEach((doc)=>{
  console.log(`${doc.id} => ${doc.data()}`);
});