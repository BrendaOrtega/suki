
const url = 'https://obscure-cliffs-57166.herokuapp.com/';

export const getPublic = (tipo, important)=>{
    let query='';
    if(tipo) query += `&tipo=${tipo}`;
    if(important) query += `&important=${important}`
    return fetch(url + 'public/?' + query)
    .then(r=>{

        if(!r.ok) {
            console.log("chet",r);
            return Promise.reject(r);
        }
        return r.json();
    })
    .then(items=>{
        return items;
    });
};

export const getPost = (id)=>{
    return fetch(url + 'posts/' + id)
    .then(r=>{
        if(!r.ok) return Promise.reject(r);
        return r.json();
    })
    .then(item=>{
        return item;
    });
};

export const getPosts = (tipo)=>{
    const query = tipo ? 'posts/?tipo=' + tipo : 'posts'
    return fetch(url + query)
    .then(r=>{
        console.log('chet1',r)
        if(!r.ok) {
            console.log("chet",r);
            return Promise.reject(r);
        }
        return r.json();
    })
    .then(items=>{
        return items;
    });
};

export const savePost = (item)=>{
    if(item._id){
        return fetch(url + 'posts/' + item._id, {
            //mayusculas we!
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(r=>{
            console.log(r)
            if(!r.ok) return Promise.reject(r);
            return r.json();
        })
        .then(item=>{
            return item;
        });
    }
    return fetch(url + 'posts', {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
    })
    .then(r=>{
        if(!r.ok) return Promise.reject(r);
        return r.json();
    })
    .then(item=>{
        return item;
    });
}

