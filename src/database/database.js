import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB-L_a4ixX_gqKeNP7NQQvEDIGbL7rdUpU",
    authDomain: "drygon-73563.firebaseapp.com",
    databaseURL: "https://drygon-73563.firebaseio.com",
    storageBucket: "drygon-73563.appspot.com",
    messagingSenderId: "32598007383"
  };

 firebase.initializeApp(config)
 export const database = firebase.database()
 export const storage = firebase.storage()


export const cloudinaryConfig = {
  cloud_name: "drygonweb",
  api_key: "475975958647686",
  api_secret: "qSS_IgHvYLn-HDuMZCCjG-tHpWU",
  enhance_image_tag: true,
  static_image_support: true,
}

