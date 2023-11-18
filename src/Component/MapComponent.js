import {Map, GoogleApiWrapper} from 'google-maps-react'
import { Component } from 'react';

class MapComponent extends Component{

    render() {
        return(
           <Map
           google = {this.props.google}
           style = {{width:"100%", height:"800px"}}
           zoom = {10}
           initialCenter= {
            {
                lat: 7.2905 ,
                lng: 80.633728
            }
           }
           />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBp404rrSFge1-32ECVc5eAH_dCpNDHBIc"
})(MapComponent)