import React, { Component } from 'react';

import AddFundraiser from '../../../components/Fundraising/AddFundraiser/AddFundraiser'

class FundraiserBuilder extends Component{
    addHandler(){
        console.log("am fost apasat")
    }
    render(){
        return(
            <div>
                <AddFundraiser 
                    clickedCancel={() => this.props.history.replace('/fundraising')}
                    clickedAdd={this.addHandler}/>
            </div>
        )
    }
}
export default FundraiserBuilder;