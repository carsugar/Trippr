var _ = require('underscore')
var request = require('request')
var path = require('path')
require('dotenv').config();

var googleMapModel = module.exports

googleMapModel.getLatLong = function(params){
	//params should be start and end addresses
	console.log('params inside googleMapModel getLatLong are: ',params)
	params = params[0] //take first trip obj
	return new Promise(function(resolve, reject) {
		var options = {
	    uri: 'https://maps.googleapis.com/maps/api/directions/json',
	    qs: {
	        origin: params.startSt + params.startCity, // -> uri + '?access_token=xxxxx%20xxxxx'
	        destination: params.endSt + params.endCity,
	        key: process.env.google_maps_API_KEY
	    }
		};
		request(options, function(error, response, body) {
			if (error) {
				console.log('error inside googleMapModel inside request', error)
			}  else {
				return resolve(body)
			}
		})
	})
}


// googleMapModel.takeArrayOfTripObjAndPushResultsIntoKeyValue = function(array) {
// 	console.log('***************************array inside googleMapModel bigarray func: ',array)
// 	array.map(function(tripObj) {
// 		console.log('inside model tripOBj is', tripObj)
// 		var newObj = {
// 			startSt: tripObj.startSt,
// 			startCity: tripObj.startCity,
// 			endSt: tripObj.endSt,
// 			endCity: tripObj.endCity
// 		}
// 		return {
// 			"id": tripObj.id,
// 			"latlng" : googleMapModel.getLatLong(newObj)
// 		}
// 	})
// }
