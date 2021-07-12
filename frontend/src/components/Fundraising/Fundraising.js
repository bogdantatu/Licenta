import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';



import axios from 'axios'

import classes from './Fundraising.module.css';
import Fundraiser from './Fundraiser/Fundraiser'


class Fundraising extends Component{
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
            })
            .catch(err => console.log(err));
    }

    render(){
        const activeFundraisers = this.state.fundraisers.filter((fundraiser) => fundraiser.status === "ACTIVA")
        const fundraisers = activeFundraisers.map((fundraiser) => {
            return <Fundraiser key={fundraiser.id} props={fundraiser}/>
        })
        const allFundraisers = this.state.fundraisers.map((fundraiser) => {
            return <Fundraiser key={fundraiser.id} props={fundraiser}/>
        })
        const isModerator = this.props.loggedUser.isModerator
        return( 
        <div className={classes.Fundraising}>
            <div className={classes.btnContainer}>
                <Button 
                    className={classes.btnAdd}
                    onClick={this.props.clickedAdd}>
                    <span>Create a fundraiser</span>
                </Button>
                <Button 
                    className={classes.btnView}
                    onClick={this.props.clickedView}>
                   <span>View your campaigns</span>
                </Button>
            </div>
            <div className={classes.Fundraisers}>
                <ul>
                    {isModerator ? allFundraisers : fundraisers}
                </ul>
            </div>
        </div>
        )
    }
}
   

const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
  })
  
export default connect(mapStateToProps)(Fundraising);