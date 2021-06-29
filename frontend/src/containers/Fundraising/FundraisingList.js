import React, { Component } from 'react';

import Fundraising from '../../components/Fundraising/Fundraising'

class FundraisingList extends Component{

   
    render(){
        return(
            <div>
                <Fundraising 
                    clickedAdd={() => this.props.history.replace('/addfundraiser')}
                    clickedView={() => this.props.history.replace('/myfundraisers')}
                    />
            </div>
        )
    }
}
export default FundraisingList;