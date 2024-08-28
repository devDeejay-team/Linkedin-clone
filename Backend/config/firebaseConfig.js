const admin = require('firebase-admin');
const serviceAccount = require('../linkedin-profile.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://linkedin-profile-generator-api.firebaseio.com" // Replace with your database URL
});

const db = admin.firestore();

module.exports = { db, admin };
