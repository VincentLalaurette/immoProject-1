
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCbWPIOTB771jNHh-W8TXY4xBDvwmfBRDo",
  authDomain: "appartements-bdc3e.firebaseapp.com",
  databaseURL: "https://appartements-bdc3e.firebaseio.com",
  projectId: "appartements-bdc3e",
  storageBucket: "appartements-bdc3e.appspot.com",
  messagingSenderId: "211031678991"
  };
  firebase.initializeApp(config);


const database = firebase.database();

export { firebase, database as default };
