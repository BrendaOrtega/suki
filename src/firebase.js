import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBcaQr-uMH7LQcFETQLiXk5LQ1WuG9nrwY",
    authDomain: "togomx-d4928.firebaseapp.com",
    databaseURL: "https://togomx-d4928.firebaseio.com",
    projectId: "togomx-d4928",
    storageBucket: "togomx-d4928.appspot.com",
    messagingSenderId: "87733822528"
};
firebase.initializeApp(config);

export default firebase;