const admin = require('firebase-admin');
const serviceAccount = require('../linkedin-profile.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL 
});

const db = admin.firestore();

module.exports = { db, admin };
