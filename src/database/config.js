import * as firebase from  'firebase';
var config = {
    apiKey: "AIzaSyAkUsuONHSxlMH6p_2-OoRlGiW90n74cgM",
    authDomain: "photowall-b247e.firebaseapp.com",
    databaseURL: "https://photowall-b247e.firebaseio.com",
    projectId: "photowall-b247e",
    storageBucket: "photowall-b247e.appspot.com",
    messagingSenderId: "348446196457"
  };
  firebase.initializeApp(config);

  const database = firebase.database()

  export {database}