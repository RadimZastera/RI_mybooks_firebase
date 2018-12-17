import {CommentsRef} from "../../config/firebase";
import {LOAD_ALL_COMMENTS, LOG_IN} from "./../actions/actionTypes";
import * as firebase from "firebase";

export const saveComment = (newComment) => async dispatch => {
    CommentsRef.push().set(newComment);
};

export const loginToDB = (email, password) => async dispatch => {
    // i am logged in but subsequent calls do no go through...  giving up - probably firebase rules
    firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            console.log(result);
            dispatch({
                type: LOG_IN,
                payload: result
            });
        }
    )
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
};

export const loadComments = () => dispatch => {
    CommentsRef.on("value", snapshot => {
        dispatch({
            type: LOAD_ALL_COMMENTS,
            payload: Object.values(snapshot.val())
        });
    });
};
