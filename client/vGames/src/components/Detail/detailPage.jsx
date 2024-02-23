import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVideogame } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./detailPage.module.css";


export default function VideoGameDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            await dispatch(getVideogame(id));
            setLoading(false);
        };
        fetchDetails();
    }, [dispatch, id]);

    const detail = useSelector((state) => state.gameId);
    
    console.log("detail",detail);

    return (
        <div>
            {loading ? (
                <span className={styles.loader}></span>
            ) : (
                <div className={styles.detailContainer}>
                    <div>
                        <h2>{detail.name}</h2>
                    </div>
                    <div className={styles.detailImageContainer}>
                        <img className={styles.detailImage} src={detail.background_image} />
                    </div>
                    <div className={`${styles.descripcion} ${styles.detailDescription}`}>
                        <h3>Description</h3>
                        <h5>{detail.description}</h5>
                    </div>
                    <div>
                        <h4>{`Rating:   ${detail.rating}`}</h4>
                    </div>
                    <div>
                        <h4>{`Released date:  ${detail.released}`}</h4>
                    </div>
                    <h4>{`Platforms:  ${detail.platforms}`}</h4>
                    <h4>Genres:</h4>
                        {detail.genres && detail.genres.map((genre, index) => (
                            <p key={index}>{genre.name}</p>
                        ))}
                </div>
            )}
        </div>
    );
}
