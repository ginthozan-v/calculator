import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAd_SkzUqgSObentMR8yvmrgoutJDkpuNA",
    authDomain: "calculate-everything-341912.firebaseapp.com",
    projectId: "calculate-everything-341912",
    storageBucket: "calculate-everything-341912.appspot.com",
    messagingSenderId: "322623660140",
    appId: "1:322623660140:web:34b2d9cb9586e59a4df849",
    measurementId: "G-BP25X7RRQB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;