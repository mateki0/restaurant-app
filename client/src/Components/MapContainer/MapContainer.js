import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl'
import './mapContainer.css';
export default function MapContainer(){
  const [map, setMap] = useState(null);
  const [isError, setIsError] = useState(false)
  const mapDiv = useRef(null)



  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    mapboxgl.accessToken = process.env.REACT_APP_MAPS_KEY;
    const initalizeMap = ({setMap, mapDiv}) => {
    const map = new mapboxgl.Map({
      container: mapDiv.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [19.33789868532415 , 50.10313625557342],
      zoom: 14,
    });
    var marker = new mapboxgl.Marker()
    .setLngLat([19.33789868532415 , 50.10313625557342])
    .addTo(map);
    map.on('load', () => {
      setMap(map);
      map.resize()
    })
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions:{
          enableHighAcurracy: true
        },
        trackUserLocation:true
      })
    )



  }
  if (!map) initalizeMap({ setMap, mapDiv })
}, [map])
  //
  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=${key}`);
  //     setMaps(result.data)
  //   }
  //   fetchData();
  // }, {})
  // console.log(maps)
  // const center = {
  //   lat:50,
  //   lng:19,
  // }
  const AnyReactComponent = ({text}) => <div>{text}</div>
  const styles = {width:'100%', height:'450px', postion:'absolute', top:0,left:0, right:0}
  return(
    <div>
    <div ref={el => (mapDiv.current = el)} id="mapDiv" />
  
    </div>
    //   <maps
    //
    //     defaultCenter={center}
    //     defaultZoom={14}
    //   >
    //
    // </maps>

  )
}
