import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import Filtered from "../Filtros/filtros";
import styles from "../Cards/cards.module.css";
import { Link } from "react-router-dom";
import { clearVideogames, getAllVideogames, getGenres, nextPage, prevPage } from "../../redux/actions";

export default function Cards() {
  
  const [loading, setLoading] = useState(true);
  const [reset, setReset]=useState(false);
  const videoJuegos = useSelector((state) => state.allGenres);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true); // Indicar que se está cargando
    dispatch(getAllVideogames(page,reset))
      .then(() => setLoading(false)) // Indicar que la carga ha finalizado
      .catch(() => setLoading(false)); // Manejar errores y indicar que la carga ha finalizado
      // setReset(false)
  }, [dispatch, page, reset]);//sirve para saber cuando el efecto debe ejecutarse
                              //cuando el valor cambia es emitido a la action

  useEffect(() => {
    dispatch(getGenres());//monto el componente y me traigo la info del estado global
  }, [dispatch]);

  

  const handleNextPage = () => {
    if (page < 7) {
      setLoading(true);
      dispatch(nextPage())
      setLoading(false)
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setLoading(true);
      dispatch(prevPage())
      setLoading(false)
    }
  };

  const handleClick=()=>{
    setLoading(true)
    dispatch(clearVideogames())
    dispatch({ type: 'SET_PAGE', payload: 1 })
    setReset(true)
  }

  return (
    <div>
      <div className={styles.carta}>
        <Filtered />
        {loading ? (
          <span className={styles.loader}></span>
        ) : (
          videoJuegos.map((element) => (
            <Card
              key={element.id}
              id={element.id}
              name={element.name}
              genres={element.genres}
              background_image={element.background_image}
            >
            </Card>
          ))
        )}
      </div>
      {!loading &&(
        <div>
          <button className={styles.botonP} onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </button>
          <span className={styles.page}>Page {page}</span>
          <button className={styles.botonN} onClick={handleNextPage} disabled={page === 7}>
            Next
          </button>
          <ul>
            <button className={styles.botonHome} onClick={handleClick}>
              <Link to={"/home"}>Reset</Link>
              </button>
          </ul>
        </div>
      )}
    </div>
  );
}





