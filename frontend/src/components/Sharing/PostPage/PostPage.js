import React, { Component } from 'react';
import {connect} from 'react-redux';


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import 'primereact/resources/primereact.css';

import classes from './PostPage.module.css';
import Button from '../../UI/Button/Button'
import axios from 'axios'
import Message from './Message/Message'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class PostPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            post: {},
            obiect: {},
            message: "",
            open: false,
            messages:[],
            nrOfMessages: 0,
            userName: []
        }

    }
    getMessages = () => {
        axios.get(`http://localhost:8080/mesaj/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                messages: res.data,
                nrOfMessages: res.data.length
            })

        })
        .catch(err => console.log(err))
    }

    
    componentDidMount(){
        axios.get(`http://localhost:8080/anunt/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                post: res.data,
            })
        })
        .catch(err => console.log(err))

        axios.get(`http://localhost:8080/obiect/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                obiect: res.data,
            })
        })
        .catch(err => console.log(err))

      this.getMessages()


    }

    changeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSend = () => {
        axios.post(`http://localhost:8080/mesaj/${this.props.loggedUser.id}/${this.props.match.params.id}`, {
            mesaj: this.state.message,
        })
        .then(this.setState({
            message: "",
            open: true
        }))
        .catch(err => console.log(err))
        
    }
    handleClose = () => {
        this.setState({
            open:false
        })
      };

    render(){
        axios.get(`http://localhost:8080/utilizator/${this.state.obiect.utilizatorId}`)
        .then(res => this.setState({
            userName: res.data.userName
        }))
        .catch(err=>console.log(err))
        const messages = this.state.messages.map((message) => {
            return <Message key={message.id} props={message} get={this.getMessages}/>
        })
        const myMessages  =this.state.messages.filter((message) => message.utilizatorId === this.props.loggedUser.id)
        const userMessages = myMessages.map((message) => {
            return <Message key={message.id} props={message} get={this.getMessages} />
        })
        return(
            <div className={classes.PostPage}>
                <div className={classes.LeftArea}>
                    <div className={classes.Titlu}><h2>{this.state.post.titlu}</h2></div>
                    <div className={classes.Img}>
                        <img src={this.state.obiect.imagini} alt=""></img>
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
                        {this.state.post.isClosed ? (
                                            <div className={classes.RightAreaWinner}>
                                                <p>This object has been donated to:   <b>{this.state.userName} </b></p> 
                                            </div>) : (
                    <div className={classes.RightArea}>
                    <div className={classes.RightTop}>
                        <div className={classes.MessageTitle}><h3>Let the user know that you want his object by sending him a message</h3></div>
                            <div className={classes.MessageInput}>
                                <div className={classes.MessageBody}>
                                    <textarea 
                                            type="text"
                                            name="message"
                                            placeholder="Your message"
                                            rows="4"
                                            value={this.state.message}
                                            onChange={this.changeHandler} 
                                            required/>
                                    </div>
                                    <div className={classes.MessageButton}>
                                        <Button 
                                            btnType="SendMessage"
                                            clicked={this.handleSend}>Send</Button>
                                    </div>
                            </div>
                    </div>
                    <div className={classes.RightBottom}>
                        <h3>Message List</h3>
                            <ul>
                               {this.props.loggedUser.id === this.state.post.utilizatorId ? messages : userMessages} 
                            </ul>
                    </div>
                    </div>
                        )}

                <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    Your message has been sent!
                </Alert>
            </Snackbar>
            </div>
        )
    }
}
const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(PostPage);