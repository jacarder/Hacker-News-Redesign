import firebase from "firebase/compat/app";
import 'firebase/compat/database';
const firebaseConfig = {
	databaseURL: 'https://hacker-news.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database()
export default firebase;