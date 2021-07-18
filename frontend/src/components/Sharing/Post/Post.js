import React, { Component } from 'react';
import { withRouter } from 'react-router';

import classes from './Post.module.css';
import axios from 'axios'


class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            userName: "",
            imagini:""
        }
    }
    
    componentDidMount(){
        axios.get(`http://localhost:8080/utilizator/${this.props.props.utilizatorId}`)
        .then(res => {
            this.setState({
                userName: res.data.userName
            })
        })
        .catch(err => console.log(err))
        axios.get(`http://localhost:8080/obiect/${this.props.props.id}`)
                    .then(res => {
                        this.setState({
                            imagini: res.data.imagini
                        })
                    })
                    .catch(err => console.log(err))
    }
    handleClick = () => {
        this.props.history.push(`/post/${this.props.props.id}`)
    }
    render(){
        return(
        <div onClick={this.handleClick} className={classes.Post}>
            <div className={classes.Image}>
                <img src={this.state.imagini} alt=""></img>
            </div>
            <div className={classes.Details}>
                <div className={classes.Title}>
                    {this.props.props.titlu}
                </div>
                <div className={classes.User}>
                    {this.state.userName}
                </div>
            </div>
        </div>
        )
    }
} 
    

export default withRouter(Post);