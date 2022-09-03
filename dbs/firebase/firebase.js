import { initializeApp } from "firebase/app";
import {collection, getFirestore, getDoc, doc, setDoc, initializeFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKlG7PRw7JXYZb4IEDebLCRHkV0vCi6ec',
  authDomain: 'apisearche.firebaseapp.com',
  projectId: 'apisearche',
  storageBucket: 'apisearche.appspot.com',
  messagingSenderId: '135832933330',
  appId: '1:135832933330:web:8318bf98db32b6c06d6e0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

export {getDoc, doc, setDoc, collection}