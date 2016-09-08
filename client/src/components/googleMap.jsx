import React, {Component} from 'react';
import ReactDom from 'react-dom';
// import { GoogleMap, DirectionsRenderer } from "react-google-maps";
import axios from 'axios'

//  props: {
//       reserveSeat: function() {},
//       trips : [
//           {
//           description:"adasd",
//           driverId:21,
//           driverName:"Calvin",
//           endCity:"Los Angeles",
//           endSt:"11111 Richland Ave",
//           endState:"CA",
//           id:34,
//           numSeats:3,
//           seatPrice:30,
//           startCity:"Santa Monica",
//           startSt:"604 Arizona Ave ",
//           startState:"CA",
//           tripDate:"2016-09-13T00:00:00.000Z",
//           vehicleMake:"Honda",
//           vehicleModel:"Honda",
//           vehicleYear:"2000"
//           }
//   ]
// }

//props inside directions: 
 // var directionsObj = {
 //      startSt: this.props.startSt,
 //      startCity: this.props.startCity,
 //      endSt: this.props.endSt,
 //      endCity: this.props.endCity
 //    }


class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
    this.postGoogleDirections = this.postGoogleDirections.bind(this)
  }
    postGoogleDirections(){
      console.log('this: ', this)
      console.log('+++++++++++++****props/params inside postGoogleDirections', this.props.TripList.trips)
      var data = this.props.TripList.trips
      axios.post('/maps', data)
       .then((result) => {
        console.log('inside googleMap inside axios POST to /maps result: ',result)
        console.log('inside googleMap inside axios POST to /maps result.data.routes[0].legs[0] is: ',result.data.routes[0].legs[0])
        this.setState({results: result.data.routes[0].legs[0]})
       })
       .catch(function(error) {
        console.log('error inside googleMap inside axios Post to /maps ', error)
       })
    }



  render() {
    console.log('thisState is ', this.state)
    return (
          <div id="map">
          <button onClick={this.postGoogleDirections}>CLICK ME I AM GOOGLEMAPS</button>
          </div>
    )
  }

}



export default Directions

