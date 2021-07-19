import React, { Component } from 'react';

import Post from './Post/Post'
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Icon from '../../assets/Images/sad-icon.png'
import classes from './Sharing.module.css'
import axios from 'axios';

class Sharing extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
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
        const activePosts = this.state.posts.map((post) => {
            return <Post key={post.id} props={post} />
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
                    {(activePosts.length  !== 0) ? activePosts : <div className={classes.NoPosts}><p>No posts available</p><img src={Icon} alt=""></img></div>}
                </div>
            </div>
        )
    }
}

export default withRouter(Sharing);