// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwvwG8PRxciuYIpFIc9WnW5C90j2EOLrk",
  authDomain: "footai-49cb3.firebaseapp.com",
  projectId: "footai-49cb3",
  storageBucket: "footai-49cb3.firebasestorage.app",
  messagingSenderId: "248434323331",
  appId: "1:248434323331:web:801c8f952b7262d52110b6",
  measurementId: "G-0ZKDBVYKEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;