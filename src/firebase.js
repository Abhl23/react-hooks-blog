import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3lcNmxgSW0_NFB6RXr2xnE7FkXzHGX1E',
  authDomain: 'react-hooks-blog-4d253.firebaseapp.com',
  projectId: 'react-hooks-blog-4d253',
  storageBucket: 'react-hooks-blog-4d253.appspot.com',
  messagingSenderId: '156187048162',
  appId: '1:156187048162:web:8c0ec7a7421e7176bfc6bb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();
