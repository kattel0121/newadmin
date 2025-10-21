// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4nXBsQ7wjGEOxmGalsivXGPZWyhIcP-M",
  authDomain: "adminpanel-d46f9.firebaseapp.com",
  databaseURL: "https://adminpanel-d46f9-default-rtdb.firebaseio.com",
  projectId: "adminpanel-d46f9",
  storageBucket: "adminpanel-d46f9.firebasestorage.app",
  messagingSenderId: "576611336365",
  appId: "1:576611336365:android:3879a755a6644e79468624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
