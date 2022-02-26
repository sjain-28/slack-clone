import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxvGlcnfBs2OCPyv2mmw4rSeT4e-ChPM0",
    authDomain: "slack-clone-challenge-28.firebaseapp.com",
    projectId: "slack-clone-challenge-28",
    storageBucket: "slack-clone-challenge-28.appspot.com",
    messagingSenderId: "413158645987",
    appId: "1:413158645987:web:88e8ae7154309c44e065d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
