import React from 'react'
import {render} from 'react-dom';
import API_KEY from '../../API_KEY.jsx';
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





const GoogleMap = (props) => {
   console.log('***********props inside triplist', props)
   axios.post('/maps', {
    params: this.props
   })
   .then(function(result) {
    console.log('inside googleMap inside axios POST to /maps result: ',result)
   })
   .catch(function(error) {
    console.log('error inside googleMap inside axios Post to /maps ', error)
   })


	return (
			<div className="googleMap"></div>
		)
}

export default GoogleMap;	

