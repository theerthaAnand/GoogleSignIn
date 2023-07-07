import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-r37r0dVQKF0rcaT9sYyTrMybzj3O2Ak",
  authDomain: "drive-auth-test-81d8d.firebaseapp.com",
  projectId: "drive-auth-test-81d8d",
  storageBucket: "drive-auth-test-81d8d.appspot.com",
  messagingSenderId: "910041671539",
  appId: "1:910041671539:web:f611ec89f07099fea2c706",
  measurementId: "G-8FSWZNGFRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider }; 
