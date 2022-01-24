import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCf79LU_KU_XSYriSuFniJVi3MJH8jg32A",
    authDomain: "ielts-app-8492b.firebaseapp.com",
    projectId: "ielts-app-8492b",
    storageBucket: "ielts-app-8492b.appspot.com",
    messagingSenderId: "473183938236",
    appId: "1:473183938236:web:0812eafef70d1fff2752b9",
    measurementId: "G-74C0QG9CFS"
})

export const auth = app.auth();
export default app;