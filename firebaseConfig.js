// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, onSnapshot, getDocs, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYDUPALSkGEtEKctXdT3Pl0F4AkIiSPbw",
  authDomain: "kiosk-d46ae.firebaseapp.com",
  projectId: "kiosk-d46ae",
  storageBucket: "kiosk-d46ae.appspot.com",
  messagingSenderId: "786240399265",
  appId: "1:786240399265:web:84e9fc1c95b903c1404de0",
  measurementId: "G-PB2JNS3VGP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default  getFirestore(app);


// useEffect(() => {
//   (async () => {
//       const colRef = collection(db, 'destinations')
//       const snapshots = await getDocs(colRef)
//       const docs = snapshots.docs.map((doc)=> doc.data())
//       setProducts(docs)
 
//   })()
//   console.log(Products)
// }, [])
