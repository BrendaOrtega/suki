import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Slide from './Slide';
import Nav from '../nav/Nav';
import CardC from '../cv/CardC';
import CardBlog from '../card/CardImg';
import CardImg from '../card/CardMedia';
import CardQuote from '../card/CardQuote';
import CardMedia from '../card/CardBlog';
import Footer from '../footer/Footer';
import BlogContainer from '../blog/BlogContainer';
import {getPublic} from '../../services/heroku';
import toastr from 'toastr';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class HomeContainer extends Component {

    state = {
        items:[]
    };

    componentDidMount () {
        window.scroll(0, 0)
    }

    componentWillMount(){
        this.getPosts();
        //this.getAlbums();
        //this.getFrases();
        
    }

    getPosts = () =>{
        let {items} = this.state;
        getPublic('BLOG_POST', true)
        .then(posts=>{
            const list = [];
            for(let post of posts){
                list.push(<CardBlog {...post} />);
            }
            items = [...items, ...list];
            this.setState({items});
            console.log(posts)
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudo cargar el blog" + e)
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
                    <Link to="about">
                        <CardC />
                    </Link>
                   
                    {items.map(item=>{
                        return item;
                    })}
                    
                </div>

            <Footer />
            </div>
        );
    }
}

export default HomeContainer;