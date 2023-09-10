import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCZAQael-uP6P5OQN25DBii4eiRWcesE7A",

    authDomain: "electrofox-a8c8a.firebaseapp.com",

    projectId: "electrofox-a8c8a",

    storageBucket: "electrofox-a8c8a.appspot.com",

    messagingSenderId: "107922004469",

    appId: "1:107922004469:web:69b9b62f338574bfbde8bc"

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);