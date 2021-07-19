import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../../UI/Button/Button'

import classes from './Message.module.css';

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            ownerId: ""
        }
    
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/utilizator/${this.props.props.utilizatorId}`)
        .then(res => {
            this.setState({
                userName: res.data.userName,
            })
        })
        .catch(err => console.log(err))
        
        axios.get(`http://localhost:8080/anunt/${this.props.props.anuntId}`)
        .then(res => {
            this.setState({
                ownerId: res.data.utilizatorId,
        })
    })

       .catch(err => console.log(err))
    }

    handleDelete = () =>{
        axios.delete(`http://localhost:8080/mesaj/${this.props.props.id}`)
        .then(res => console.log(res.data))
        .then(() => this.props.get())
        .catch(err => console.log(err))
    }
    
    handlePickWinner = () => {
        axios.put(`http://localhost:8080/anunt/${this.props.props.anuntId}/${this.props.props.utilizatorId}`)
        .then(() => {
            alert("Congratulations! You donated your object!")
        })
        .catch(err => console.log(err))
    }
  
    render(){
        return( 
            <div className={classes.Message}>
                    {this.props.loggedUser.id === this.state.ownerId ? 
                        (<div>
                        <div className={classes.MessageBody}>{this.props.props.mesaj}</div>

                        <div className={classes.withButton}>
                            <Button 
                                btnType="DeleteMessage"
                                clicked={this.handleDelete}>Delete</Button>
                            <Button
                                btnType="PickWinner"
                                clicked={this.handlePickWinner}>Pick winner</Button>
                            <div className={classes.MessageUserWithButton}> ~ {this.state.userName}</div>
                        </div>
                        </div>)
                    :  (<div>
                    <div className={classes.MessageBody}>{this.props.props.mesaj}</div>
                        {this.props.loggedUser.id === this.props.props.utilizatorId ? (
                            <div className={classes.withButton}>
                                <Button 
                                    btnType="DeleteMessage"
                                    clicked={this.handleDelete}>Delete</Button>
                                <div className={classes.MessageUserWithButton}> ~ {this.state.userName}</div>
                            </div>
                        ): <div className={classes.MessageUser}> ~ {this.state.userName}</div>}
                        </div>)
                    }
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(Message);