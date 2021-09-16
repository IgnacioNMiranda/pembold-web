export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'penboldt.firebaseapp.com',
    projectId: 'penboldt',
    storageBucket: 'penboldt.appspot.com',
    messagingSenderId: '1074705297765',
    appId: '1:1074705297765:web:a5972aa2213590ca73318c',
    measurementId: 'G-BF7Q6BZXEG',
  },
  api: {
    uri: process.env.NEXT_PUBLIC_API_URI,
  },
};
