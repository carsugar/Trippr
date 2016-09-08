import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SimpleMap from "./simpleMap.jsx";
import update from 'react-addons-update';

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

// this.state = {
//   end_location: {
//     lat,
//     lng
//   },
//   start_location: {
//     lat:,
//     lng: 
//   }

// }



class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.5206757
        },
        key: `Taiwan`,
        defaultAnimation: 2
      }]
    };
    this.postGoogleDirections = this.postGoogleDirections.bind(this)
    this.handleMapClick = this.handleMapClick.bind(this)
    this.handleMarkerRightclick = this.handleMarkerRightclick.bind(this)
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
//end location lat this.state.end_location.lat
  componentDidMount() {
    setTimeout(() => {
      let { markers } = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: 25.99,
              lng: 122.9,
            },
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          },
        ],
      });
      this.setState({ markers });
    }, 2000);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }



  render() {
    console.log('thisState inside render is: ', this.state)
    return (
      <div className="mapContainerGeneral">
          <div id="mapButton">
            <button onClick={this.postGoogleDirections}>CLICK ME I AM GOOGLEMAPS</button>
          </div>
          LALALALALALDREW SAID PUT TEXT HERE LALALALA
          <div id="tryGoogleMap">
          <SimpleMap 
            markers={this.state.markers}
            results={this.state.results}
            onMapClick={this.handleMapClick}
            onMarkerRightclick={this.handleMarkerRightclick}
          />            
          </div>
      </div>
    )
  }
}



export default Directions

