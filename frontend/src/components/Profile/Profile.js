import React, { Component } from 'react';


import classes from './Profile.module.css';

import Button from '../UI/Button/Button'
import Tabs from "../UI/Tabs//Tabs"; 

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
            nrOfPosts: 0
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
    }

    handleDeleteUser = () => {
        axios.delete(`http://localhost:8080/utilizator/${this.props.loggedUser.id}`)
        .then(firebase.auth().currentUser.delete())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    render(){
        const myFundraisers = this.state.fundraisers.filter((fundraiser) => fundraiser.utilizatorId === this.props.loggedUser.id)
        const fundraisers = myFundraisers.map((fundraiser) => {
            return <UserFundraiser key={fundraiser.id} props={fundraiser} get={this.getFundraisers}/>
        })
        const posts = this.state.posts.map((post) => {
            return <MyPost key={post.id} props={post} get={this.getPosts}/>
        })
        return(
            <div className={classes.Profile}>
            <div className={classes.ProfileLeft}>
                 <div className={classes.ProfilePhoto}>
                     <img src="https://resizing.flixster.com/pF4wUsB6SS4aaUdLBdXz1d2cF0I=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/45497/45497_v9_bb.jpg" alt=""></img>
                     <h2>{this.props.loggedUser.userName}</h2>
                 </div>
                 <div className={classes.ProfileDetails}>
                     <p>Email:</p>
                     <h3>{this.props.loggedUser.email}</h3>
                     <p>Nume:</p>
                     <h3>{this.props.loggedUser.nume}</h3>
                     <p>Prenume:</p>
                     <h3>{this.props.loggedUser.prenume}</h3>
                 </div>
                 <div className={classes.ProfileOptions}>
                     <Button btnType="ChangePass">Change your password</Button>
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
                                    {posts}
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
  
export default connect(mapStateToProps)(Profile);