import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';



import classes from './Fundraiser.module.css';

 

class Fundraiser extends Component{
    render(){
        const isModerator = this.props.loggedUser.isModerator 
        const returnedArrayBuffer = this.props.props.imagini
        // console.log(returnedArrayBuffer)
        // const newBlob = new Blob([returnedArrayBuffer], { type: 'image/png;base64' });
        // console.log(newBlob)
        // const url = URL.createObjectURL(newBlob);
        // console.log(url)

        console.log(returnedArrayBuffer)
        const base64 = btoa(returnedArrayBuffer)
        const url = `"data:image/gif;base64,${base64}"`
        console.log(url)
        return(
            <div className={classes.Fundraiser}>
            <img src={url} alt="imagine"/>
            <div className={classes.FundraiserDetails}>
                <div className={classes.Title}>{this.props.props.titlu}</div>
                <div className={classes.Description}>{this.props.props.descriereScurta}</div>
            </div>
            <div className={classes.FundraiserViewMore}>
                <div className={classes.ProgressBar}></div>
                {isModerator ?  
                    <div>
                        <select className={classes.statusSelect}>
                            <option value="VRF SUPL">Extra Info</option>
                            <option value="RESPINSA">Rejected</option>
                            <option value="ACTIVA">Active</option>
                            <option value="INCHEIATA">Ended</option>
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