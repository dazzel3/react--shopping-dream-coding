import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      return result.user;
    })
    .catch(console.error);
}

export async function logout() {
  return signOut(auth).then(() => null);
}
