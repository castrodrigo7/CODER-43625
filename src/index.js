import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUtZAkq71-nN3tMYJ8M2F0iKu1zubFnk",
  authDomain: "primerproyecto-ffeaf.firebaseapp.com",
  projectId: "primerproyecto-ffeaf",
  storageBucket: "primerproyecto-ffeaf.appspot.com",
  messagingSenderId: "104710075337",
  appId: "1:104710075337:web:58f1a36a48d97dd47d2e18"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

