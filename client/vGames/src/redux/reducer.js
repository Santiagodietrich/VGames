import{
    GET_ALL_VIDEOGAMES,
    CREATE_VIDEOGAME,
    GET_NAME_VIDEOGAMES,
    FILTER_BY_GENRE,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    FILTER_BY_ORIGIN,
    GET_VIDEOGAME,
    GET_GENRES,
    NEXT_PAGE,
    PREV_PAGE,
    CLEAR_VIDEOGAMES,
    SET_PAGE
} from "./actions";

const initialState={
    allGenres:[],
    allVideogames:[],
    gameId:[],
    generos:[],
    page:1,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case GET_ALL_VIDEOGAMES:
            
            return{
                ...state,
                allVideogames:action.payload,
                allGenres:action.payload,
            };

        

        case GET_VIDEOGAME:

            return{
                ...state,
                gameId:action.payload
            }

        case GET_NAME_VIDEOGAMES:
            return{
                ...state,
                allGenres:action.payload
            }


        case GET_GENRES:
            return{
                ...state,
                generos:action.payload
            }

        case NEXT_PAGE:
            return{
                ...state,page:state.page + 1
            };

        case PREV_PAGE:
            return{
                ...state,page:state.page - 1
            };    

        case FILTER_BY_GENRE:
            const genreToFilter = action.payload;
                    
            if (genreToFilter === "") {
                return { ...state, allGenres: state.allVideogames }; // Mostrar todos los videojuegos
            } else {
                const filteredByGenre = state.allVideogames.filter((game) => {
                    // Verifica si algún género coincide con el género proporcionado
                    return game.genres.some((genre) => {
                        // Si los géneros son cadenas, compáralos directamente
                        if (typeof genre === 'string') {
                            return genre === genreToFilter;
                        }
                        // Si los géneros son objetos, compara sus propiedades 'name'
                        return genre.name === genreToFilter;
                    });
                });
        return { ...state, allGenres: filteredByGenre }; // Filtrar por género
    }




        case FILTER_BY_ORIGIN:
            const originToFilter=action.payload;
            if(originToFilter === ""){
                return{...state,allGenres:state.allVideogames};
            }else if(originToFilter === "API"){
                const filteredByApi=state.allVideogames.filter((game)=>
                 // Puedo utilizar un regex para identificar el origen de la API por el formato del ID
                // Por ejemplo, si los de la API tienen IDs numéricos y los de la DB tienen UUIDs
                /^-?\d+$/.test(game.id)
                );
                return{...state,allGenres:filteredByApi};// Filtrar por origen API
            }else if(originToFilter === "DB"){
                const filteredByDb=state.allVideogames.filter((game)=>
                 // Utilizo nuevamente un regex para identificar el origen de la DB por el formato del ID
                 /^-?\d+$/.test(game.id) === false
                 );
                 return{...state,allGenres:filteredByDb};// Filtrar por origen DB
            }

     


        case ORDER_BY_NAME:
            const isDescending = !state.isDescending;
            const sortedGames = [...state.allGenres].sort((a, b) => {
            if (isDescending) {
                return a.name > b.name ? -1 : 1;
            } else {
                return a.name < b.name ? -1 : 1;
            }
        });

           return { ...state, allGenres: sortedGames, isDescending };



        case ORDER_BY_RATING:
            let gamesOrd;
            if(action.payload === "Ascendente"){
                gamesOrd=[...state.allGenres].sort((a, b)=>a.rating - b.rating);
            }else{
                gamesOrd=[...state.allGenres].sort((a, b)=>b.rating - a.rating);
            }
                
            return{...state,allGenres:gamesOrd};

        case CLEAR_VIDEOGAMES:
            return{
                ...state,allGenres:[]
            }


        case SET_PAGE:
                return {
                    ...state,
                    page: action.payload,
                };    


        case CREATE_VIDEOGAME:
                return{...state}    

        default:
                return{...state}

        }
}

export default reducer;