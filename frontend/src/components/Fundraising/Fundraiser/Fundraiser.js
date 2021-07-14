import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
// import axios from 'axios'



import classes from './Fundraiser.module.css';

 

class Fundraiser extends Component{
    constructor(props){
        super(props);
        this.state={
            status: "VRF"
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    render(){
        const isModerator = this.props.loggedUser.isModerator 
    
        return(
            <div className={classes.Fundraiser}>
            <img src="" alt="imagine"/>
            <div className={classes.FundraiserDetails}>
                <div className={classes.Title}>{this.props.props.titlu}</div>
                <div className={classes.Description}>{this.props.props.descriereScurta}</div>
            </div>
            <div className={classes.FundraiserViewMore}>
                <div className={classes.ProgressBar}></div>
                {isModerator ?  
                    <div>
                        <select 
                            className={classes.statusSelect}
                            onChange={this.handleChange}>
                                <option 
                                    value="VRF SUPL"
                                    name="VRF SUPL">Extra Info</option>
                                <option 
                                    value="RESPINSA"
                                    name="RESPINSA">Rejected</option>
                                <option 
                                    value="ACTIVA"
                                    name="ACTIVA">Active</option>
                                <option 
                                    value="INCHEIATA"
                                    name="INCHEIATA">Ended</option>
                        </select>
                    </div>
                    : null}
                <Button className={classes.btnViewMore}>
                    <span>View more</span>
                </Button>
            </div>
        </div>
        )
    }
}
const mapStateToProps = ({user}) => ({
    loggedUser: user.loggedUser
})
  
export default connect(mapStateToProps)(Fundraiser);