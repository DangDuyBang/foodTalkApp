import firebase from 'firebase/app'
import 'firebase/storage'

/*
* Firebase Storage - Browser SDK 
* https://github.com/firebase/firebase-storage 
*
* Copyright (c) 2015 Google, Inc.  All rights reserved.
*
* Use of this source code is governed by an MIT-style license that can be 
* found in the LICENSE file at https://github.com/firebase/firebase-storage/blob/master/LICENSE

const firebaseStorage = firebase.storage() 
*Example:
*let filename = `post/post-${Date.now()}-${postImage.name}`
*            const uploadTask = storage.ref(`images/${filename}`).put(postImage)
*            uploadTask.on(
*                'state_changed',
*                () => {
*                setLoading(true)
*                },
*                (err) => {
*                console.log('error from firebase')
*                setLoading(false)
*                uiDispatch({ type: 'SET_POST_MODEL', payload: false })
*                },
*                () => {
*                storage
*                    .ref('images')
*                    .child(filename)
*                    .getDownloadURL()
*                    .then((uri) => {
*                    createUserPost(uri)
*                    })
*                },
*/
 
const firebaseConfig = {
    apiKey: "AIzaSyA5Rbxpmu498VGSzJLrQ-ix_BM6EN5nfLo",
    authDomain: "login-183fb.firebaseapp.com",
    projectId: "login-183fb",
    storageBucket: "login-183fb.appspot.com",
    messagingSenderId: "494465272082",
    appId: "1:494465272082:web:5d13db61f31d3e514ccbcb",
    measurementId: "G-Q3R4CM267X"
};

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()

  export {firebase as default, storage}