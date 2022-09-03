import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyABfcW2MC1eKo7KAtLD3VZ6pDg6G9b2qUI",
  authDomain: "my-chat-7c6b6.firebaseapp.com",
  databaseURL: "https://my-chat-7c6b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-chat-7c6b6",
  storageBucket: "my-chat-7c6b6.appspot.com",
  messagingSenderId: "118442469144",
  appId: "1:118442469144:web:754ec4e683842e693da06d",
  measurementId: "G-C9LC8KSLZJ"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const baseApi = axios.create({
  baseURL: 'https://my-chat-7c6b6-default-rtdb.asia-southeast1.firebasedatabase.app',
})