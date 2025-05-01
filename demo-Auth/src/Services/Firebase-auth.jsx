
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAz4-YCU-fQxJnOs17AyWtyna1uSFi_XnE",
  authDomain: "fir-project-eea54.firebaseapp.com",
  projectId: "fir-project-eea54",
  storageBucket: "fir-project-eea54.firebasestorage.app",
  messagingSenderId: "164412843641",
  appId: "1:164412843641:web:4352b77e4ecdb3b9bc96a8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();