import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnoNBe5VZ31BxPqd9kt_90fnK0oyIOMQg",
  authDomain: "catch-of-the-day-henry-darnell.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-henry-darnell.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, base };

export default base;
