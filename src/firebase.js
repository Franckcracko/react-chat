// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWGCFnSXNrMm9wgylBMNZlq88Rrrx_toc",
  authDomain: "chat-react-de463.firebaseapp.com",
  projectId: "chat-react-de463",
  storageBucket: "chat-react-de463.appspot.com",
  messagingSenderId: "739927674265",
  appId: "1:739927674265:web:6fafe40a8317533ea65708",
  measurementId: "G-6V4LHCVZ94"
};

// Initialize Firebase
const DB = initializeApp(firebaseConfig);
const DBFirestore = getFirestore(DB);
// Create a child reference
export const getImage = async ({ nameImage }) => {
  const docRef = doc(DBFirestore, "images", nameImage);
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap;
  } else {
   return undefined
    // doc.data() will be undefined in this case
    // console.log("No such document!");
  }

};


export default DB;