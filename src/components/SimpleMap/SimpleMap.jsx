import React, { useEffect, useState } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
// AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA

function SimpleMap() {
  const position = {lat: 40.71550047598207, lng: 64.99960158539278}
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  console.log(lat, lng)

  useEffect(() =>{
      navigator.geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        error => console.log(error)
      )
  }, [])

  return (
    <APIProvider apiKey='AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA'>
      <div style={{height: '400px', width: '100%'}}>
       <Map zoom={5} center={position} mapId={"da9902056e735de7"} onClick={(e) => {
          setLat(e.detail.latLng.lat)
          setLng(e.detail.latLng.lng)
       }}>
        <Marker position={{lat: lat, lng: lng}}>
        </Marker>
       </Map>
      </div>
    </APIProvider>
  )
}


export default SimpleMap