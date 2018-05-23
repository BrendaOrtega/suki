import firebase from 'firebase';

  // Initialize Firebase
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1fUdJQshJeopZ6_BQFArwxE5DbXeZdGk",
    authDomain: "e-commerce-b0a76.firebaseapp.com",
    databaseURL: "https://e-commerce-b0a76.firebaseio.com",
    projectId: "e-commerce-b0a76",
    storageBucket: "e-commerce-b0a76.appspot.com",
    messagingSenderId: "762521478850"
  };
  firebase.initializeApp(config);


//   firebase.initializeApp(config);

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