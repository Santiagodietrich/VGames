import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function Card({ id, name, background_image, genres }) {
  
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={background_image} />
        <div className={styles.cardDetail}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
            <div>
              <h2 className={styles.gen} >{genres.map((genre) => genre.name).join(', ')}</h2>
            </div>
        </div>
      </div>
    </div>
  );
}
