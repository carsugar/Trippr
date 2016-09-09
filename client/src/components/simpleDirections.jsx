import React, {Component} from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
} from "react-google-maps";

export default class SimpleDirections extends Component{
	constructor(props) {
		super(props)
		this.state = {
      results: {},
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
			directions: null
		}
	}




  componentDidUpdate() {
    console.log("***COMPONENT WILLRECEIVEPROPS****")
    const DirectionsService = new google.maps.DirectionsService();
    console.log('***********************inside componentWillReceiveProps this.props is', this.props)
    DirectionsService.route({
      origin: new google.maps.LatLng(this.props.results.start_location.lat, this.props.results.start_location.lng),
      destination: new google.maps.LatLng(this.props.results.end_location.lat, this.props.results.end_location.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${ result }`);
      }
    });
  }
  

render() {
  console.log('++++++props in SimpleDirections are: ',this.props)
    const { origin, directions } = this.state;
   if (this.props.results.start_address) { 
    var startObj = {
      defaultAnimation: 2,
      key: this.props.results.start_address,
      position: {
        lat: this.props.results.start_location.lat,
        lng: this.props.results.start_location.lng
      }
    }
    var endObj = {
      defaultAnimation: 2,
      key: this.props.results.end_address,
      position: {
        lat: this.props.results.end_location.lat,
        lng: this.props.results.end_location.lng
      }
    }
  }


return (
<section style={{ height: `100%` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...this.props.containerElementProps}
          style={{
            height: `100%`  }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={3}
          center={{ lat:  (this.props.centerPoints) ? this.props.centerPoints.avgLat: -31, 
                           lng: (this.props.centerPoints) ? this.props.centerPoints.avgLng: 22
                         }}
        >
          
        
          {directions ? <DirectionsRenderer directions={directions} /> : null}
        </GoogleMap>
      }
    />
  </section>
  )
  }
}
