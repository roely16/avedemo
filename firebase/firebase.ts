import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlG7YT7x_oIJGUKzVSLApQpjV2WUXS09E',
  authDomain: 'ave-demo.firebaseapp.com', // Corregido
  projectId: 'ave-demo',
  storageBucket: 'ave-demo.appspot.com',
  messagingSenderId: '52503481028', // Project Number
  appId: '1:52503481028:web:YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
