import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { useState } from 'react';

function Map() {
  const [searchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([0, 10]);

//   const position = [searchParams.get('lat'), searchParams.get('lng')];

  return (
    <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={mapPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
