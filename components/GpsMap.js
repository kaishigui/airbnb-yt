import React from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter'



function GpsMap({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  
  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
   <Map
    mapStyle="mapbox://styles/kaishigui/cl3onj19d002715qer2fbsnam"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
   >

     {searchResults.map((result) => (
       <div key={result.long}>
         <Marker
          longitude={result.long}
          latitude={result.lat}
          anchor="center"
          offsetLeft={-20}
          offsetTop={-10}
         >
           <span
            role="img"
            className='cursor-pointer text-4xl animate-bounce'
            onClick={() => setSelectedLocation(result)}
            aria-label="push-pin"
           >
            📌 
           </span>
         </Marker>

         {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
            {result.title}
          </Popup>
         ) : (
           false
          )}
       </div>
     ))}

   </Map>
  )
}

export default GpsMap