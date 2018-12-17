import * as firebase from "firebase";
import 'firebase/auth';
import { config } from "../config/config";

firebase.initializeApp(config);

const reference = firebase.database().ref();

export const CommentsRef = reference.child("Comments");
