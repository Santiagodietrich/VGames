import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre, filterOrigin, orderByName, orderByRating } from "../../redux/actions";
import styles from "./filtros.module.css";

export default function Filtered() {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.generos);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('');

   

    const handleGenreChange = async (e) => {
        const selectedGenre = e.target.value;
        setSelectedGenre(selectedGenre);
        try {
            await dispatch(filterByGenre(selectedGenre));
        } catch (error) {
            console.error(error);
        }
    };


    const handleOriginChange = async (payload) => {
        setSelectedOrigin(payload);
        try {
            await dispatch(filterOrigin(payload));
        } catch (error) {
            console.error(error);
        }
    };

    const handleOrderName = (event) => {
        dispatch(orderByName(event.target.value));
    };

    const handleOrderRating = (event) => {
        dispatch(orderByRating(event.target.value));
    };

    return (
        <div className={styles.filtro}>
        
         <div className={styles.filtrar} >
            <label className={styles.sub}>Filtrar por Genero:</label>
                <select defaultValue={'default'} name="genre" onChange={handleGenreChange}>
                    <option disabled={true} value='default'>All</option>
                      {allGenres?.map(el => (       
                        <option key={el} value={el}>{el}</option>
                      ))}
                </select>
        </div>
            <div className={styles.filtrar} >
                <label className={styles.subti}>Filtrar por Origen</label>
                <select value={selectedOrigin} onChange={(e) => handleOriginChange(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="API">API</option>
                    <option value="DB">Base de Datos</option>
                </select>
            </div>

            <div  className={styles.filtrar} >
                <label className={styles.subtitulo}>Orden Alfabetico</label>
                <select onChange={(event) => handleOrderName(event)}>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
            <div className={styles.filtrar} >
                <label className={styles.subt}>Orden Rating</label>
                <select onChange={(event) => handleOrderRating(event)}>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
        </div>
    );
}
