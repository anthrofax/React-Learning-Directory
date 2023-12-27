import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  // eslint-disable-next-line
  const { emoji, cityName, country, date, position:{lat,lng} } = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${city.id}?lat=${lat}&lng=${lng}`} >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <span className={styles.date}>{formatDate(date)}</span>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
