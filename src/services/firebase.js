import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCgEBgWpBbzOAJGuS5pWDIBCAaJ7LUfV88",
    authDomain: "hackaton-b4fd1.firebaseapp.com",
    databaseURL: "https://hackaton-b4fd1.firebaseio.com",
    projectId: "hackaton-b4fd1",
    storageBucket: "hackaton-b4fd1.appspot.com",
    messagingSenderId: "360798458585"
  };
  firebase.initializeApp(config);

  //methods
  const db = firebase.database();
  //endpoints
  const quotesRef = db.ref('quotes');
  const mediaRef = db.ref('media');
  const blogRef = db.ref('blog');

  //posts
  /*save*/
  export function savePost(post){
    post['date'] = Date.now();
    console.log(post);
    return blogRef.push(post)
      .then(snap=>{
          //console.log(snap.key);
          post['key'] = snap.key;
          return post;
      })
      .catch(e=>{
          console.log(e)
          return e;
      })
  }


  //quotes
  /*save*/
  export function saveQuote(quote){
      const q = {
          date: Date.now(),
          text:quote
      }
      return quotesRef.push(q)
        .then(snap=>{
            console.log(snap);
            console.log(snap.key);
            console.log(snap.val());
            return snap
        })
        .catch(e=>{
            console.log(e)
            return e;
        })
  }



  export default firebase;