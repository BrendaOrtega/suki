import firebase from 'firebase';

  // Initialize Firebase
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgEBgWpBbzOAJGuS5pWDIBCAaJ7LUfV88",
    authDomain: "hackaton-b4fd1.firebaseapp.com",
    databaseURL: "https://hackaton-b4fd1.firebaseio.com",
    projectId: "hackaton-b4fd1",
    storageBucket: "hackaton-b4fd1.appspot.com",
    messagingSenderId: "360798458585"
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
  export function saveOrUpdatePost(post){
    post['date'] = Date.now();
    if(post.key){
        const updates = {};
        updates[post.key] = post;
        return blogRef.update(updates)
        .then(snap=>{
            return snap.key;
        })
        .catch(e=>{
            return e;
        })
    }else{
        return blogRef.push(post)
        .then(snap=>{
            return snap.key;
        })
        .catch(e=>{
            return e;
        })
    }
}


/*read*/

//all
export function getPosts(){
    return blogRef
    .once('value')
    .then(snap=>{
        // console.log(snap.val());
        const ob = snap.val();
        const list = [];
        for(let key in ob){
            const post = ob[key];
            post['key'] = key;
            list.push(post);
        }
        return list;
    })
    .catch(e=>{
        console.log(e)
        return e;
    })
}

//single
export function getPost(id){
    return blogRef.child(id)
    .once('value')
    .then(snap=>{
        //console.log(snap.key);
        const post = snap.val();
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