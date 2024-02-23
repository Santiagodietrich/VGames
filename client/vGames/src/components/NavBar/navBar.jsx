import SearchBar from '../SearchBar/searchBar'
import {Link} from 'react-router-dom';
import styles from './navBar.module.css';


export default function NavBar ({onSearch}){

    return(
        <div className={styles.principal}>
            <div className={styles.menu}>
                <nav>
                    <SearchBar onSearch={onSearch}></SearchBar>
                    <ul>
                        <button className={styles.botonHome}>
                            <Link to={"/home"}>Home</Link>
                        </button>
                    </ul>

                    <ul>
                        <button className={styles.botonForm}>
                            <Link to={"/Form"}>Create Videogame</Link>
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    )

}