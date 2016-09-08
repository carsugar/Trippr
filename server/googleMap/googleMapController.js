var path = require('path')
require('dotenv').config();
var rp = require('request-promise');
var googleMapModel = require('./googleMapModel.js')
console.log('we are inside googleMapController GENERAL')






module.exports = {
	getMaps: function(req, res) {
		console.log('we are inside googleMapController inside getMap')
		console.log('******inside googleMapController inside getMap req.body is', req.body)
		googleMapModel.getLatLong(req.body)
       .then(function (results) {
        console.log('inside googleMapController inside getMaps result is ', results);
        res.status(200).send(results)
        })
        .catch(function (err) {
    	console.log('inside googleMapController inside getMaps ERROR is : ',err)
    	res.end(err)
        });
	}
}



