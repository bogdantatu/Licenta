import React, { Component } from 'react';

import Sharing from '../../components/Sharing/Sharing'

class SharingList extends Component{

   
    render(){
        return(
            <div>
                <Sharing 
                    // clickedAdd={() => this.props.history.replace('/addfundraiser')}
                    />
            </div>
        )
    }
}
export default SharingList;