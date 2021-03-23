import React, { useState, useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import MapDiv from './MapDiv';

interface IMap {
  setMap: React.Dispatch<React.SetStateAction<any>>;
  mapDiv: React.RefObject<HTMLElement>;
}

const MapContainer = () => {
  const [map, setMap] = useState<Map>();
  const mapDiv = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPS_KEY || '';
    const initalizeMap = ({ setMap, mapDiv }: IMap) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [19.33789868532415, 50.10313625557342],
        zoom: 14,
      });
      new mapboxgl.Marker().setLngLat([19.33789868532415, 50.10313625557342]).addTo(map);
      map.on('load', () => {
        setMap(map);
        map.resize();
      });

      map.addControl(
        new mapboxgl.GeolocateControl({
          trackUserLocation: true,
        })
      );
    };
    if (!map) initalizeMap({ setMap, mapDiv });
  }, [map]);

  return (
    <section>
      <MapDiv ref={(el) => (mapDiv.current = el)} />
    </section>
  );
};

export default MapContainer;
