import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBenCZVyGl7i886z1wYwAUw1-hmDGcMv_w",
  authDomain: "todo-app-17de6.firebaseapp.com",
  projectId: "todo-app-17de6",
  storageBucket: "todo-app-17de6.appspot.com",
  messagingSenderId: "589415912189",
  appId: "1:589415912189:web:d62fa0eb7ec17666736494"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth , db};
