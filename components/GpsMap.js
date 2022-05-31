import React from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter'
import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import "mapbox-gl/dist/mapbox-gl.css";



function GpsMap({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = React.useState({});
  
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  console.log(selectedLocation)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: (center.latitude-.15),
    zoom: 11,
  });

  return (
   <Map
    mapStyle="mapbox://styles/kaishigui/cl3onj19d002715qer2fbsnam"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
   >

     {searchResults.map(({ lat, long, title, img, price, star, location }) => (
       <div key={lat} >
         <Marker
          longitude={long}
          latitude={lat}
          offsetTop={'-10px'}
          offsetLeft={'-20px'}
         >
         
          <LocationMarkerIcon 
              className="h-8 text-red-500 cursor-pointer animate-bounce"
              onClick={() => setSelectedLocation({lat, long})} 
              aria-label="push-pin"
          />
          </Marker>

         {/* This popup that should show if we click on a Marker */}

         {selectedLocation.lat && 
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick
            latitude={lat}
            longitude={long}
            className="z-50  rounded-xl"
            >
            {title}
          </Popup>
         
          }
           {console.log(lat)}
        </div>
     ))}
   </Map>
  )
}

export default GpsMap