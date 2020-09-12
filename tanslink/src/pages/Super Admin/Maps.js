import React , {Component } from 'react';


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class Maps extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Curre location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCY6Lbf4IKzRMWARjiEXuvNIOFB4aHk8tA")
})(Maps)