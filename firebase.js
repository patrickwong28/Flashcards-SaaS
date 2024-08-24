// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJhV5UxkRdU41ZOhluwcl3tuCTa7IQrGg',
  authDomain: 'flashcard-saas-da128.firebaseapp.com',
  projectId: 'flashcard-saas-da128',
  storageBucket: 'flashcard-saas-da128.appspot.com',
  messagingSenderId: '861473434446',
  appId: '1:861473434446:web:e7c5ae647d321baf418c1f',
  measurementId: 'G-7F5RGWN4L7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
