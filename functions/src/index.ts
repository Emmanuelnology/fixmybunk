import { https } from 'firebase-functions';
import { initializeApp, firestore } from 'firebase-admin';

initializeApp();
const settings = { timestampsInSnapshots: true };
const db = firestore();
db.settings(settings);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Saves a message to the Firebase Realtime Database but sanitizes the text by removing swearwords.
export const echo = https.onCall(async (data, context) => {
    let results = [];
    return await db.collection('/poc-test')
    .get()
    .then((res) => {
        res.docs.forEach((result) => {
            results[result.id] = result.data();
        });
        return { 
            data: results
        }
    })
    
});