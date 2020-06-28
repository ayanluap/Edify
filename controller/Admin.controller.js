var admin = require('firebase-admin');

var serviceAccount = require("../edify-services-firebase-adminsdk-pbt4o-66d722696a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edify-services.firebaseio.com"
}); 

const db = admin.firestore()

module.exports = {
    postLogin: (req, res, next) => {
       const { email, password } = req.body
    }
}