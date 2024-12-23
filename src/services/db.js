import {db} from './config';
import {
    collection,
    doc,
    setDoc,
} from 'firebase/firestore';

export async function saveURL() {


    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(() => console.log('INFO: User saved to Firestore'))
        .catch((error) => {
            console.error('WARNING: Error saving user to Firestore:', error);
            alert('WARNING: User not registered, due to error in saving user info to database');
        });;


    const data = {
        userId: 'ffff',
    };
    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    await setDoc(doc(usersRef, 'id'), data)
        .then(() => console.log('INFO: User saved to Firestore'))
        .catch((error) => {
            console.error('WARNING: Error saving user to Firestore:', error);
            alert('WARNING: User not registered, due to error in saving user info to database');
        });
}