import React, { Component } from 'react';

import classes from './PostPage.module.css';
import axios from 'axios'

class PostPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            post: {},
            imagini:""
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/anunt/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                post: res.data,
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
        axios.get(`http://localhost:8080/obiect/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                imagini: res.data.imagini
            })
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className={classes.PostPage}>
                <div className={classes.LeftArea}>
                    <div className={classes.Titlu}><h2>{this.state.post.titlu}</h2></div>
                    <div className={classes.Img}>
                        <img src={this.state.imagini} alt=""></img>
                    </div>
                    <div className={classes.Descriere}>
                        <p>{this.state.post.descriere}</p>
                    </div>
                    <div className={classes.DateContact}>
                        <h4>Contact data:</h4>
                        <p>{this.state.post.dateContact}</p>
                    </div>
                    <div className={classes.PostStatus}>
                        <h4>Post status: </h4>
                        <p>{this.state.post.isClosed ? "Closed" : "Active"}</p>
                    </div>
                </div>
                <div className={classes.RightArea}>
                    <div className={classes.RightTop}>
                        <div className={classes.MessageTitle}>Let the owner know that you want his object</div>
                        <div className={classes.MessageBody}>
                            <input 
                                type="text" />
                        </div>
                        <div className={classes.MessageButton}></div>
                    </div>
                    <div className={classes.RightBottom}>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage;