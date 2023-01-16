import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBw7ToB-GpJfnqW_L8cSlEr_uvKDfv07cU",
  authDomain: "todo-list-162e3.firebaseapp.com",
  databaseURL: "https://todo-list-162e3-default-rtdb.firebaseio.com",
  projectId: "todo-list-162e3",
  storageBucket: "todo-list-162e3.appspot.com",
  messagingSenderId: "878620118114",
  appId: "1:878620118114:web:d4ff007c7545b79b1d953b",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
