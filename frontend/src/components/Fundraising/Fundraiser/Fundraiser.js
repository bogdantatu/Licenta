import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios'



import classes from './Fundraiser.module.css';

 

class Fundraiser extends Component{
    constructor(props){
        super(props);
        this.state={
            status: "CHECKING",
            userName: ""
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/utilizator/${this.props.props.utilizatorId}`)
        .then(res => {
            this.setState({
                userName: res.data.userName
            })
        })
        .catch(err => console.log(err))
    }
    handleChange = (evt) => {       
        this.setState({
            status : evt.target.value
        }, () => {
            axios.put(`http://localhost:8080/campanie/${this.props.props.id}`, {
                status: evt.target.value
            })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        })
    }
    handleViewMore = () => {
        this.props.history.push(`/campanie/${this.props.props.id}`)
    }
    render(){
        const isModerator = this.props.loggedUser.isModerator 
    
        return(
            <div className={classes.Fundraiser}>
            <img src={this.props.props.imagini} alt="imagine"/>
            <div className={classes.FundraiserDetails}>
                <div className={classes.Title}>{this.props.props.titlu}</div>
                <div className={classes.Description}>{this.props.props.descriereScurta}</div>
            </div>
            <div className={classes.FundraiserViewMore}>
                <div className={classes.ProgressBar}></div>
                {isModerator ?  
                    <div className={classes.ModeratorView}>
                        <h4>{this.state.userName}</h4>
                        <select 
                            className={classes.statusSelect}
                            onChange={this.handleChange}>
                                <option>{this.props.props.status}</option>
                                <option 
                                    value="CHECKING"
                                    name="CHECKING">CHECKING</option>
                                <option 
                                    value="EXTRA INFO"
                                    name="EXTRA INFO">EXTRA INFO</option>
                                <option 
                                    value="REJECTED"
                                    name="REJECTED">REJECTED</option>
                                <option 
                                    value="ACTIVE"
                                    name="ACTIVE">ACTIVE</option>
                                <option 
                                    value="ENDED"
                                    name="ENDED">ENDED</option>
                        </select>
                    </div>
                    : null}
                <Button 
                    className={classes.btnViewMore}
                    onClick={this.handleViewMore}>
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
  
export default connect(mapStateToProps)(withRouter(Fundraiser));