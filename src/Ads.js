import React, { Component } from 'react';
import './Ads.css'
import AdInfo from './AdInfo'

class Ads extends Component{
    render(){
        return(
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                <AdInfo />
            </div>
        )
    }
}
export default Ads