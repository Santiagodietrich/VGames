import {useState} from "react";
import styles from "./searchBar.module.css";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";



export default function SearchBar ({onSearch}){
    const dispatch=useDispatch();
    const [name,setName]=useState({name:""});

    function handleInputChange(event){
       setName({...name,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        if(!name.name.length){
            window.alert("Por favor ingrese un videojuego")
        }else{
            dispatch(getNameVideogames(name.name));
        }

    }

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className={styles.container} >
                <input className={styles.input} name="name"  type="text" value={name.name} placeholder="Enter your videogame..." onChange={(e)=>handleInputChange(e)}/>
                <Link to={`/name?name=${name.name}`} >
                <button className={styles.boton}  type="submit" onClick={(e)=> handleSubmit(e)}>Search</button>
                </Link>
            </div>
        </form>
    )
    }


