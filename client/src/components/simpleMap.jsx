import React from "react";
import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
} from "react-google-maps";

const SimpleMap = (props) => {
	console.log('props inside simpleMap****** are: ',props)
 






	return (
  <section style={{ height: `100%` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `100%`  }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={3}
          defaultCenter={{ lat: -1.4 , lng: -1.4}}
          onClick={props.onMapClick}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
  )
}

export default SimpleMap;