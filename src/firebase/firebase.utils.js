import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/database";



const config = {
  apiKey: "AIzaSyA1ez9INbzPEzIcJAfa3gEberAdEYF46QM",
  authDomain: "cynic-editor-v3.firebaseapp.com",
  databaseURL: "https://cynic-editor-v3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cynic-editor-v3",
  storageBucket: "cynic-editor-v3.appspot.com",
  messagingSenderId: "433934941310",
  appId: "1:433934941310:web:a5ce9433b65b9a89e86c2f",
  measurementId: "G-M36SFFD21F"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collection = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collection.doc();
//     batch.set(newDocRef, obj);
//   })
//   return await batch.commit()
// }



export const covertCollectionsSnapshotToMap = (images, title) => {
  const transformedCollection = images.docs.map(doc => {
    const {data, position, name} = doc.data();
    
    return {
      data,
      position,
      name
    }
  });
  
  return { [title]: transformedCollection}
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;