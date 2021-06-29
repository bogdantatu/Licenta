import React, { Component } from 'react';

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
                    {fundraisers}
                </ul>
            </div>
        </div>)

    }
}
   

export default Fundraising;