import axios from 'axios';
import React, { Component } from 'react';
import classes from './Search.module.css';
import Post from '../Sharing/Post/Post'
import Icon from '../../assets/Images/sad-icon.png'


class Search extends Component{
    constructor(props){
        super(props)
        this.state = { 
            posts: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/anunt/?filter=${this.props.match.params.keyword}`)
        .then(res => this.setState({
            posts: res.data
        }))
        .catch(err => console.log(err))
    }

    render(){
        const posts = this.state.posts.filter((post) => !post.isClosed)
        const activePosts = posts.map((post) => {
            return <Post key={post.id} props={post} />
        })

        return(
            <div className={classes.SharingLayout}>
                    {(activePosts.length  !== 0) ? 
                        <div>Results for <u>{this.props.match.params.keyword}</u>: 
                            <div className={classes.Posts}>{activePosts}</div>
                        </div> : 
                        <div className={classes.NoPosts}><p>No posts found</p><img src={Icon} alt=""></img></div>
                        }
            </div>
        )
    }
}
export default Search;