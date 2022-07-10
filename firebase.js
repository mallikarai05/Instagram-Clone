import { initializeApp , getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC1-MWFSRXLZD36PVUM0AKjI-1_LmkW1Pw",
  authDomain: "insta-clone-368df.firebaseapp.com",
  projectId: "insta-clone-368df",
  storageBucket: "insta-clone-368df.appspot.com",
  messagingSenderId: "296239509485",
  appId: "1:296239509485:web:23c1c04fa4d70cfdd801e4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage=getStorage();

export {app, db, storage}