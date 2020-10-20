import * as firebase from 'firebase'  

var config = {

  };

export default firebase;

let app = firebase.initializeApp(config)

export const db = app.database()  
