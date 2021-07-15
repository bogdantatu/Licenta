import axios from 'axios';
import React, { Component } from 'react';
import classes from './SearchFundraising.module.css';

class SearchFundraising extends Component{
    constructor(props){
        super(props)
        this.state = { 
            fundraisings: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/utilizator`)
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}
export default SearchFundraising;