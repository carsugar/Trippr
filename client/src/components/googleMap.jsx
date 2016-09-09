import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SimpleDirections from './simpleDirections.jsx';
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
      centerPoints: null,
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
    this.findCenterPoints = this.findCenterPoints.bind(this)
  }
  postGoogleDirections(){
      console.log('this: ', this)
      console.log('+++props/params inside postGoogleDirections', this.props.TripList.trips)
      var data = this.props.TripList.trips
      axios.post('/maps', data)
       .then((result) => {
        console.log('inside googleMap inside axios POST to /maps result: ',result)
        console.log('inside googleMap inside axios POST to /maps result.data.routes[0].legs[0] is: ',result.data.routes[0].legs[0])
        this.setState({results: result.data.routes[0].legs[0]})
        var centerPoints = this.findCenterPoints(result.data.routes[0].legs[0])
        this.setState({centerPoints: centerPoints})

        // var markerLat = result.data.routes[0].legs[0].start_location.lat
        // console.log('markerLat is ', markerLat)
        // var markerLng = result.data.routes[0].legs[0].start_location.lng
        // this.setState({markers[0].position.lat: markerLat})
        // this.setState({markers[0].position.lng: markerLng})
       })
       .catch(function(error) {
        console.log('error inside googleMap inside axios Post to /maps ', error)
       })
  }
//end location lat this.state.end_location.lat
  componentDidMount() {
    this.postGoogleDirections()
    setTimeout(() => {
      let { markers } = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: (this.state.results.end_location)? this.state.results.end_location.lat : 14,
              lng: (this.state.results.end_location)? this.state.results.end_location.lng : 14
            },
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          },
        ],
      });
      this.setState({ markers });
    }, 2000);
  }

  findCenterPoints(params) {
    console.log('we are inside findCenterPoints inside googleMap')
    if (params) {
    var avgLat = (params.start_location.lat + params.end_location.lat)/2
    var avgLng = (params.start_location.lng + params.end_location.lng)/2

    
    console.log('avgLat inside googleMap jsx is: ', avgLat)
    return {
      avgLat: avgLat,
      avgLng: avgLng 
    }
    }  else {
      console.log('AJAX REQUEST DIDNT HAPPEN')
      return {}
    }
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

  //Put back under LALALA
  // <div id="tryGoogleMap">
  //         <SimpleMap 
  //           markers={this.state.markers}
  //           results={this.state.results}
  //           onMapClick={this.handleMapClick}
  //           onMarkerRightclick={this.handleMarkerRightclick}
  //           centerPoints={this.state.centerPoints}
  //         />            
  //         </div>



  render() {
    console.log('__thisState is ', this.state)
    return (
      <div className="mapContainerGeneral">
          <div id="mapButton">
            <button onClick={this.postGoogleDirections}>CLICK ME I AM GOOGLEMAPS</button>
          </div>         
         <div id="tryGoogleMap">
          <SimpleDirections
            results={this.state.results}
            centerPoints={this.state.centerPoints}
          />
         </div>
      </div>
    )
  }
}



export default Directions

