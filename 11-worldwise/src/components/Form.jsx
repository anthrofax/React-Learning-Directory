// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from 'react';

import styles from './Form.module.css';
import Button from './Button';
import BackButton from './BackButton';
import useUrlPosition from '../hooks/useUrlPosition';
import Spinner from './Spinner'
import Message from './Message'
import { useEffect } from 'react';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);

}

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

function Form() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setisLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState();
  const [country, setCountry] = useState();
  const [emoji, setEmoji] = useState();
  const [geoCodingError, setGeoCodingError] = useState();

  useEffect(
    function () {
      async function reverseGeocode() {
        try {
          setisLoadingGeocoding(true);
          setGeoCodingError("");
          
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          
          if(!data.countryName) throw new Error('Area yang anda klik tidak valid, mohon pilih lokasi yang lain.');

          setCityName(data.city || data.locality || '');
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeoCodingError(err.message);
        } finally {
          setisLoadingGeocoding(false);
        }
      }

      reverseGeocode();
    },
    [lat, lng]
  );

  if (geoCodingError) return <Message message={geoCodingError}></Message>
  if (isLoadingGeocoding) return < Spinner/>

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
