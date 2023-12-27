import { useSearchParams, useNavigate} from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div className={styles.mapContainer} onClick={() => navigate('form')}>
            Map
            <p>Position:</p>
            <p>Latitude: {searchParams.get('lat')}</p>
            <p>Longitude: {searchParams.get('lng')}</p>
            <button onClick={() => setSearchParams({lat:23, lng: 30})}>Change position</button>
        </div>
    )
}

export default Map
