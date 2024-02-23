import React from "react";
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";


export default function LandingPage (){
    return(
        
        <div className={styles.landing}>
            <h1 className={styles.titulo}>PI HENRY-VIDEOGAMES</h1>
            <Link to={'/home'}>
                <button className={styles.boton}>START</button>
            </Link>
        </div>
        
    )
}