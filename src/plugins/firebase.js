import * as firebase from 'firebase'  

var config = {
    apiKey: "AIzaSyBdA_Cm4B_LO_7uWRKBCeb7mP8QgKE_RYs",
    authDomain: "taller2-f1a65.firebaseapp.com",
    databaseURL: "https://taller2-f1a65.firebaseio.com",
    projectId: "taller2-f1a65",
    storageBucket: "taller2-f1a65.appspot.com",
    messagingSenderId: "334993998813",
    appId: "1:334993998813:web:ba7846ce2b03bd262f2c34"
  };

export default firebase;

let app = firebase.initializeApp(config)

export const db = app.database()  
