import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./mapContainer.css";
export default function MapContainer() {
  const [map, setMap] = useState(null);
  const mapDiv = useRef(null);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    mapboxgl.accessToken = process.env.REACT_APP_MAPS_KEY;
    const initalizeMap = ({ setMap, mapDiv }) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [19.33789868532415, 50.10313625557342],
        zoom: 14,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAcurracy: true,
          },
          trackUserLocation: true,
        })
      );
    };
    if (!map) initalizeMap({ setMap, mapDiv });
  }, [map]);

  return (
    <div>
      <div ref={(el) => (mapDiv.current = el)} id="mapDiv" />
    </div>
    //   <maps
    //
    //     defaultCenter={center}
    //     defaultZoom={14}
    //   >
    //
    // </maps>
  );
}
