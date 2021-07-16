import React, { Component } from 'react';

import Post from './Post/Post'

import Button from '@material-ui/core/Button';

import classes from './Sharing.module.css'
import axios from 'axios';

class Sharing extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/anunt`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err))

    }
    render(){
        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} props={post}/>
        })
        return(
            <div>
                <div className={classes.btnContainer}>
                    <Button 
                        className={classes.btnAdd}
                        onClick={this.props.clickedAdd}>
                        <span>Donate an object</span>
                    </Button>
                </div>
                <div className={classes.SharingLayout}>
                    {posts}
                </div>
            </div>
        )
    }
}

export default Sharing;