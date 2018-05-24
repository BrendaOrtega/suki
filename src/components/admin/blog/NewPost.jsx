import React, {Component} from 'react';
import toastr from 'toastr';
import {Layout, Input, Menu} from 'antd';
import {LastForm} from './LastForm';
import './editorStyles.css';
import {getPost, saveOrUpdatePost} from '../../../services/firebase';
const Header = Layout.Header;



class NewPost extends Component{

    state = {
        post:{
            title:null,
            body: "{\"entityMap\":{},\"blocks\":[{\"key\":\"lcva\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"68c1i\",\"text\":\"El titulo de tu post\",\"type\":\"header-one\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4fc5h\",\"text\":\"Un subtitulo genial\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bscdo\",\"text\":\"Y una historia memorable...\",\"type\":\"header-three\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dlf2b\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6pi0p\",\"text\":\"cuentanos mas!\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}}]}",
            tags:[]
        },
        showEditor:false
    }

    componentWillMount(){
        if(this.props.match.params.id){
            getPost(this.props.match.params.id)
            .then(post=>{
                // console.log(post);
                post['body'] = JSON.parse(post.body);
                this.setState({post, showEditor:true})
            })
            .catch(e=>{
                toastr.error('no se pudo cargar')
            })
        }else{
            const {post} = this.state;
            post['body'] = JSON.parse(post.body);
            this.setState({showEditor:true, post})
        }
    }

    onChangeTitle = (e) => {
        const {post} = this.state;
        post['title'] = e.target.value;
        this.setState({post});
    };

    onSave = (content) => {
        const {post} = this.state;
        console.log(post);
        post['body'] = JSON.stringify(content);
        this.findTitle(content)
        saveOrUpdatePost(post)
        .then(r=>{
            console.log(r)
            toastr.success('se guardo');
            post['body'] = JSON.parse(post.body);
            post['key'] = r;
            this.setState({post});
        })
        .catch(e=>{
            toastr.error('no se guardo')
        })
    };

    findTitle = (content) => {
        const block = content.blocks.find(b=>{
            return b.type === "header-one";
        });
        if(!block) return;
        const {post} = this.state;
        post['title'] = block.text;
        this.setState({post});
    }

    render(){
        const {post, showEditor} = this.state;
        // console.log(post);
        if(!showEditor) return <div>Loading...</div>
        return(

            <div className="editor-bliss">
                <LastForm 
                content={post.body}
                onSave={this.onSave}
                />
            </div>

            
        )
    }
}

export default NewPost;

