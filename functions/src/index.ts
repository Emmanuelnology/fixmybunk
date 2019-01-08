import { https } from 'firebase-functions';
import { initializeApp, firestore } from 'firebase-admin';

initializeApp();
const settings = { timestampsInSnapshots: true };
const db = firestore();
db.settings(settings);


const getDataFromDocSnapshot = (documentSnapshot) => documentSnapshot.data();
const mapQueryData = (querySnapshot) => querySnapshot.docs.map(getDataFromDocSnapshot);

interface IEchoData {
    reference:number;
}

export const echo = https.onCall(async (data: IEchoData, context) => {
    const queryData = await db.collection('/poc-test')
    .where('reference', '==', data.reference)
    .get();
    return mapQueryData(queryData);
});
