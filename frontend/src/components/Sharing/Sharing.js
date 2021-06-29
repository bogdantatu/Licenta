import React, { Component } from 'react';

import Post from './Post/Post'

import Button from '@material-ui/core/Button';

import classes from './Sharing.module.css'

class Sharing extends Component{
    render(){
        return(
            <div>
                <div className={classes.btnContainer}>
                    <Button 
                        className={classes.btnAdd}
                        onClick={this.props.clickedAdd}>
                        <span>Donate an object</span>
                    </Button>
                </div>
                <div className={classes.SharingLayout}>
                    <Post 
                        img="https://lcdn.altex.ro/resize/media/catalog/product/R/F/2bd48d28d1c32adea0e55139a4e6434a/RF4141PW4_1.jpg"
                        title="Frigider functional"
                        user="Popescu Marin"
                        />
                    <Post 
                        img="https://www.ronexprod.ro/galerie/Contemporan/Dormitor/1-Dormitor%20Corso/Dulap%20%202%20usi.JPG"
                        title="Dulap din stejar"
                        user="Popescu Marin"
                        />
                        <Post 
                        img="https://s13emagst.akamaized.net/products/22603/22602679/images/res_10c6ea1ecb5662e42e2819d0d8d4598a.jpg"
                        title="Carucior copii"
                        user="Andrei22"

                        />
                        <Post 
                        img="https://lcdn.altex.ro/resize/media/catalog/product/a/7/2bd48d28d1c32adea0e55139a4e6434a/a7b4d03332cc3a5705222b709e0754ea_131044_2_34040d46.jpg"
                        title="Masina de spalat"
                        user="Bogdan33"

                        />
                        <Post 
                        img="https://studiocasa.ro/image/cache/ariete/prajitor-de-paine-ariete-0155-vintage-810-w-2-felii-crem-beige-800x800.jpg"
                        title="Prajitor de paine"
                        user="Radu1"

                        />
                        <Post 
                        img="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png"                        
                        title="Telefon Iphone 6"
                        user="Radu1"
                        />
                </div>
            </div>
        )
    }
}

export default Sharing;