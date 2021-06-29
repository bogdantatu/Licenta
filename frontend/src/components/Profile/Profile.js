import React, { Component } from 'react';


import classes from './Profile.module.css';

import firebase from '../../firebase'
import Button from '../UI/Button/Button'
import Tabs from "../UI/Tabs//Tabs"; 

import Post from '../Sharing/Post/Post'
import Fundraiser from '../Fundraising/Fundraiser/Fundraiser'
import axios from 'axios'


  
class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            fundraisers: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/campanie`)
            .then(res => {
                this.setState({fundraisers: res.data})
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    render(){
        const fundraisers = this.state.fundraisers.map((fundraiser) => {
            return <Fundraiser key={fundraiser.id} props={fundraiser}/>
        })
        return(
            <div className={classes.Profile}>
            <div className={classes.ProfileLeft}>
                 <div className={classes.ProfilePhoto}>
                     <img src="https://resizing.flixster.com/pF4wUsB6SS4aaUdLBdXz1d2cF0I=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/45497/45497_v9_bb.jpg" alt=""></img>
                     <h2>DonatorulAnonim</h2>
                 </div>
                 <div className={classes.ProfileDetails}>
                     <p>Email:</p>
                     <h3>bogdan@yahoo.com</h3>
                     <p>Nume:</p>
                     <h3>Tatu</h3>
                     <p>Prenume:</p>
                     <h3>Bogdan</h3>
                 </div>
                 <div className={classes.ProfileOptions}>
                     <Button btnType="ChangePass">Change your password</Button>
                     <Button btnType="SignOut" onClick={() => firebase.auth().signOut()}>Sign out</Button>
                     <Button btnType="DeleteAccount"><span>Delete your account</span></Button>
                 </div>
            </div>
            <div className={classes.ProfileRight}>
                 <div className={classes.ProfileRightOptions}>
                         <Tabs>
                             <div  label="Your Fundraisers"> 
                                <div className={classes.Fundraisers}>
                                {fundraisers}
                                </div>
                             </div>
                             <div label="Your Donations"> 
                                <div className={classes.Posts}>
                                    <Post 
                                        img="https://lcdn.altex.ro/resize/media/catalog/product/a/7/2bd48d28d1c32adea0e55139a4e6434a/a7b4d03332cc3a5705222b709e0754ea_131044_2_34040d46.jpg"
                                        title="Masina de spalat"
                                        user="DonatorulAnonim" />
                                </div>
                             </div>
                         </Tabs>
                 </div>
            </div>
            
         </div>
        )
    }
}  
export default Profile;