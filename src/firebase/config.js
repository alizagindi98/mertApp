import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyDGJM-GHwImJgCPn8yqtiqwcpAwxhtCyUk  ',
  authDomain: 'mert-app-a988a.firebaseapp.com',
  databaseURL: 'https://mert-app-a988a.firebaseio.com',
  projectId: 'mert-app-a988a',
  storageBucket: 'mert-app-a988a.appspot.com',
  messagingSenderId: '289378632055',
  appId: '1:289378632055:ios:e12f88d8075e78353ea172',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };