import React, { Component } from 'react';

import AddFundraiser from '../../../components/Fundraising/AddFundraiser/AddFundraiser'

class FundraiserBuilder extends Component{
    render(){
        return(
            <div>
                <AddFundraiser 
                    clickedCancel={() => this.props.history.replace('/fundraising')}
                   />
            </div>
        )
    }
}
export default FundraiserBuilder;