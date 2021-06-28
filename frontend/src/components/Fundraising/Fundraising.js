import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';


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
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    render(){
        const fundraisers = this.state.fundraisers.map((fundraiser) => {
            return <Fundraiser key={fundraiser.id} props={fundraiser}/>
        })
       console.log(fundraisers)
        return( 
        <div className={classes.Fundraising}>
            <div className={classes.btnContainer}>
                <Button 
                    className={classes.btnAdd}
                    startIcon={<AddCircleIcon/>}
                    onClick={this.props.clickedAdd}>
                    Create a fundraiser
                </Button>
                <Button 
                    className={classes.btnView}
                    startIcon={<VisibilityIcon/>}
                    onClick={this.props.clickedView}>
                    View your campaigns
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