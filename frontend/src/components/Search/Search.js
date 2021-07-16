import axios from 'axios';
import React, { Component } from 'react';
// import classes from './SearchFundraising.module.css';

class Search extends Component{
    constructor(props){
        super(props)
        this.state = { 
            fundraisings: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/campanie/?filter=${this.props.match.params.keyword}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                hey
            </div>
        )
    }
}
export default Search;