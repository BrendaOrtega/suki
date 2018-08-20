import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Slide from './Slide';
import Nav from '../nav/Nav';
import CardC from '../cv/CardC';
import CardBlog from '../card/CardBlog';
//import CardImg from '../card/CardMedia';
import CardQuote from '../card/CardQuote';
import CardMedia from '../card/CardMedia';
import Footer from '../footer/Footer';
//import BlogContainer from '../blog/BlogContainer';
import {getPublic, getQuotes, getAlbums} from '../../services/heroku';
import toastr from 'toastr';
//import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
//import CardCv from '../cv/CardC';
import sr from './scrollReveal.js';

class HomeContainer extends Component {

    state = {
        items:[]
    };
    componentDidMount () {
        window.scroll(0, 0)
        const config = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        const config2 = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.right', config2);
        sr.reveal('.left', config);
        sr.reveal('.bot', config3);





    };


    componentWillMount(){
        Promise.all([this.getPosts(),this.getQuotes(),this.getAlbums()])
        .then(res=>{
            const items = this.makeItShuffle(res[0], res[1], res[2]);
            this.setState({items});
        })
        
    }

    makeItShuffle = (list1, list2, list3=[]) => {
       // const final = [];
            const total = list1.length + list2.length + list3.length ;
            const conc = [...list1, ...list2, ...list3]
            for(let i=0; i< total; i++){
                const random = Math.floor(Math.random() * total);
                const aux = conc[0];
                conc[0] = conc[random];
                conc[random] = aux;
            }
            return conc;
            
    };

    getAlbums = () => {
        return getAlbums(true)
        .then(its=>{
            console.log(its);
            const list = [];
            for(let item of its){
                list.push(<CardMedia key={item._id} {...item} />);
            }
            return list;
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudieron cargar las citas" + e)
            return [];
        })
    };

    getQuotes = () => {
       // let {items} = this.state;
        return getQuotes(true)
        .then(its=>{
            console.log(its);
            const list = [];
            for(let item of its){
                list.push(<CardQuote key={item._id} {...item} />);
            }
            return list;
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudieron cargar las citas" + e)
            return [];
        })
    };

    getPosts = () =>{
        //let {items} = this.state;
        return getPublic('BLOG_POST', true)
        .then(posts=>{
            const list = [];
            for(let post of posts){
                list.push(<CardBlog key={post._id} {...post} />);
            }
            return list;
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudo cargar el blog" + e)
            return [];
        })
    }

    render() {
        const { items } = this.state;
        console.log(items);
        //this.shuffle();
        return (
            <div>
                <Slide />
                <Nav />
                <div style={{margin:"50px auto", width:"85%", display:"flex", flexWrap:"wrap" }}>
                    <Link to="about bot">
                        <CardC />
                    </Link>
                    <div >
                       <div className="cards">
                           {items.map(item=>{     return item; })}

                       </div>
                    </div>

                </div>

            <Footer />
            </div>
        );
    }
}

export default HomeContainer;