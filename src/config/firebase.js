import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAwCAKn1YiDFqULETOVabJLOdsdPJgtVYo',
	authDomain: 'dev-tools-1682594204789.firebaseapp.com',
	databaseURL:
		'https://dev-tools-1682594204789-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'dev-tools-1682594204789',
	storageBucket: 'dev-tools-1682594204789.appspot.com',
	messagingSenderId: '444683648050',
	appId: '1:444683648050:web:2c7e301bc349ab4ad1902b',
	measurementId: 'G-MNYWYL7DFJ',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
