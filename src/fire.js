import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD32NuQBw8llnUDRrQgnbBjS0Kb-GKRHe4",
    authDomain: "boxing-a604f.firebaseapp.com",
    databaseURL: "https://boxing-a604f.firebaseio.com",
    projectId: "boxing-a604f",
    storageBucket: "boxing-a604f.appspot.com",
    messagingSenderId: "604192297434"
};
var fire = firebase.initializeApp(config);
export default fire;