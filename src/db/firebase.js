
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBobc5QJnfr375oEMEcunhq5l-buBk6KPE",
    authDomain: "surveyapp-bc928.firebaseapp.com",
    projectId: "surveyapp-bc928",
    storageBucket: "surveyapp-bc928.appspot.com",
    messagingSenderId: "778248709928",
    appId: "1:778248709928:web:548b92d4dd79e7a83ad21d",
    measurementId: "G-8MTJRFB8PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}