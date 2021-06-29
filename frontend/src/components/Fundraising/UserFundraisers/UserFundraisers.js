import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import axios from 'axios'

import classes from './UserFundraisers.module.css';
import UserFundraiser from './UserFundraiser/UserFundraiser'


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
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleClick = () => {
        this.props.history.replace('/fundraising')
    }

    render(){
        const fundraisers = this.state.fundraisers.map((fundraiser) => {
            return <UserFundraiser key={fundraiser.id} props={fundraiser}/>
        })
       console.log(fundraisers)
        return( 
        <div className={classes.Fundraising}>
            <div className={classes.btnContainer}>
                <Button 
                    className={classes.btnView}
                    onClick={this.handleClick}>
                    <span>View all campaigns</span>
                </Button>
            </div>
            <div className={classes.Fundraisers}>
                <ul>
                    {fundraisers}
                </ul>
            </div>
        </div>)

    }
}
   

export default Fundraising;