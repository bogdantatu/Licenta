import React, { Component } from 'react';

import classes from './Profile.module.css';

import Button from '../UI/Button/Button'
import Tabs from "../UI/Tabs//Tabs"; 
import { withRouter } from 'react-router';

import MyPost from '../Sharing/MyPosts/MyPost'
import UserFundraiser from '../Fundraising/UserFundraisers/UserFundraiser/UserFundraiser'

import firebase from '../../firebase'
import axios from 'axios'
import {connect} from 'react-redux';


  
class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            fundraisers: [],
            nrOfFundraisers: 0,
            posts: [],
            nrOfPosts: 0,
            imagineProfil: "",
            userName: "",
            nume: "",
            prenume: "",
            email: ""
        }
    }
    getFundraisers = () => {
        axios.get(`http://localhost:8080/campanie`)
        .then(res => {
            this.setState({
                fundraisers: res.data,
                nrOfFundraisers: res.data.length
            })
        })
        .catch(err => console.log(err));
    }
    getPosts =() => {
        axios.get(`http://localhost:8080/anunt`)
        .then(res => {
            this.setState({
                posts: res.data,
                nrOfPosts: res.data.length
            })
        })
        .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getFundraisers()
        this.getPosts()
        axios.get(`http://localhost:8080/utilizator/${this.props.loggedUser.id}`)
        .then(res => {
            this.setState({
                imagineProfil: res.data.imagineProfil,
                userName: res.data.userName,
                nume: res.data.nume,
                prenume: res.data.prenume,
                email: res.data.email
            })
        })
        .catch(err=> console.log(err))
    }

    handleDeleteUser = () => {
        axios.delete(`http://localhost:8080/utilizator/${this.props.loggedUser.id}`)
        .then(firebase.auth().currentUser.delete())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    handleEdit = () => {
        this.props.history.push(`/editprofile/${this.props.loggedUser.id}`)
    }    

    render(){
        const myFundraisers = this.state.fundraisers.filter((fundraiser) => fundraiser.utilizatorId === this.props.loggedUser.id)
        const fundraisers = myFundraisers.map((fundraiser) => {
            return <UserFundraiser key={fundraiser.id} props={fundraiser} get={this.getFundraisers}/>
        })
        const posts = this.state.posts.filter((post) => post.utilizatorId === this.props.loggedUser.id)
        const myPosts = posts.map((post) => {
            return <MyPost key={post.id} props={post} get={this.getPosts}/>
        })
        return(
            <div className={classes.Profile}>
            <div className={classes.ProfileLeft}>
                 <div className={classes.ProfilePhoto}>
                     <img src={this.state.imagineProfil} alt=""></img>
                     <h2>{this.state.userName}</h2>
                 </div>
                 <div className={classes.ProfileDetails}>
                     <p>Email:</p>
                     <h3>{this.state.email}</h3>
                     <p>Nume:</p>
                     <h3>{this.state.nume}</h3>
                     <p>Prenume:</p>
                     <h3>{this.state.prenume}</h3>
                 </div>
                 <div className={classes.ProfileOptions}>
                     <Button btnType="ChangePass" clicked={this.handleEdit}>Edit your Profile</Button>
                     <Button btnType="SignOut" clicked={() => firebase.auth().signOut()}>Sign out</Button>
                     <Button btnType="DeleteAccount" clicked={this.handleDeleteUser}><span>Delete your account</span></Button>
                 </div>
            </div>
            <div className={classes.ProfileRight}>
                 <div className={classes.ProfileRightOptions}>
                         <Tabs>
                             <div  label="Your Fundraisers"> 
                                <div className={classes.Fundraisers}>
                                    <ul>
                                        {fundraisers}
                                    </ul>
                                </div>
                             </div>
                             <div label="Your Donations"> 
                                <div className={classes.Posts}>
                                    {myPosts}
                                </div>
                             </div>
                         </Tabs>
                 </div>
            </div>
            
         </div>
        )
    }
}  
const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(withRouter(Profile));