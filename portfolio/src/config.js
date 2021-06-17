import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5XdpbPUcm_xFAfnQhwRCuMgV0lMyH75U",
  authDomain: "guhan-portfolio-afde4.firebaseapp.com",
  projectId: "guhan-portfolio-afde4",
  databaseURL:"https://guhan-portfolio-afde4-default-rtdb.firebaseio.com",
  storageBucket: "guhan-portfolio-afde4.appspot.com",
  messagingSenderId: "390964123000",
  appId: "1:390964123000:web:ef44c1eac08dc97a43e48d",
  measurementId: "G-TE27XDK8E1"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;