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

  export const storage = firebase.storage();

  //prototyping files
//   firebase.storage().ref().constructor.prototype.putFiles = function(files) { 
//     var ref = this;
//     return Promise.all(files.map(function(file) {
//         console.log(file.name);
//       return ref.child(file.name).put(file);
//     }));
//   }


//   firebase.initializeApp(config);

  //methods
  const db = firebase.database();
  //endpoints
  const quotesRef = db.ref('quotes');
  const mediaRef = db.ref('media');
  const blogRef = db.ref('blog');
  const videoRef = db.ref('videos');
const partnersRef = db.ref('partner');

  //posts
  /*save*/
  export function saveOrUpdatePost(post){
    post['date'] = Date.now();
    console.log(post)
    if(post.key){
        const updates = {};
        updates[post.key] = post;
        return blogRef.update(updates)
        .then(()=>{
            return post.key;
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
        // console.log(snap.key);
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
      quote['date'] = Date.now()
      return quotesRef.push(quote)
        .then(snap=>{
            return snap
        })
        .catch(e=>{
            console.log(e)
            return e;
        })
  }
export function savePartner(partner){
    partner['date'] = Date.now()
    return partnersRef.push(partner)
        .then(snap=>{
            return snap
        })
        .catch(e=>{
            console.log(e)
            return e;
        })
}
export function getPartners(partner){
    return partnersRef.once("value")
        .then(snap=>{
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
  /* GetAll */
  export function getQuotes(quote){
    return quotesRef.once("value")
      .then(snap=>{
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
  // GetOne
  //EditOne

  /* albums */
  //save one
  export function saveAlbum(item){
    item['date'] = Date.now()
    return mediaRef.push(item)
      .then(snap=>{
          return snap
      })
      .catch(e=>{
          console.log(e)
          return e;
      })
}

//getAll
export function getAlbums(){
    return mediaRef.once("value")
      .then(snap=>{
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

//get one
export function getAlbum(id){
    return mediaRef.child(id).once("value")
      .then(snap=>{
        const ob = snap.val();
        const list = [];
        ob['key'] = snap.key;
        return ob;
      })
      .catch(e=>{
          console.log(e)
          return e;
      })
}

/* Videos */
// uploadVideo
export function saveVideo(item){
    item['date'] = Date.now()
    return videoRef.push(item)
      .then(snap=>{
          return snap
      })
      .catch(e=>{
          console.log(e)
          return e;
      })
}

//all Videos

export function getVideos(){
    return videoRef.once("value")
      .then(snap=>{
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


  export default firebase;