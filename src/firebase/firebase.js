import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA5Rbxpmu498VGSzJLrQ-ix_BM6EN5nfLo",
  authDomain: "login-183fb.firebaseapp.com",
  projectId: "login-183fb",
  storageBucket: "login-183fb.appspot.com",
  messagingSenderId: "494465272082",
  appId: "1:494465272082:web:5d13db61f31d3e514ccbcb",
  measurementId: "G-Q3R4CM267X"
};

initializeApp(firebaseConfig);

const storage = getStorage()

export { storage }