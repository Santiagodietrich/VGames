import axios from "axios";
export const GET_ALL_VIDEOGAMES="GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_NAME_VIDEOGAMES = "GET_NAME_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const CREATE_VIDEOGAME="CREATE_VIDEOGAME";
export const FILTER_BY_GENRE="FILTER_BY_GENRE";
export const ORDER_BY_NAME="ORDER_BY_NAME";
export const ORDER_BY_RATING="ORDER_BY_RATING";
export const FILTER_BY_ORIGIN="FILTER_BY_ORIGIN";
export const ORDER_ASC="ORDER_ASC";
export const ORDER_DESC="ORDER_DESC";
export const NEXT_PAGE="NEXT_PAGE";
export const PREV_PAGE="PREV_PAGE";
export const CLEAR_VIDEOGAMES="CLEAR_VIDEOGAMES";
export const SET_PAGE="SET_PAGE"


export function getAllVideogames(page){
    return async function (dispatch){
        let allVideogames=await axios.get(`/videogames?page=${page}`);
        let data=allVideogames.data;
         dispatch({
            type:"GET_ALL_VIDEOGAMES",
            payload:data
        });
    };
}


export function nextPage(payload){
    return{
        type:NEXT_PAGE,
        payload
    }
}

export function  prevPage(payload){
    return{
        type:PREV_PAGE,
        payload
    }
}



export function getVideogame(id){
    try{
        return async function(dispatch){
            const json=await axios.get(`/videogames-${id}`);
            return dispatch({
                type:"GET_VIDEOGAME",
                payload:json.data
            })
        }
    }catch(error){
        console.error("error al cargar los datos")
    }
}



export function getNameVideogames(name){
    try{
        return async function (dispatch){
            let allVg=await axios.get( `/name?name=${name}`);
            return dispatch({
                type:GET_NAME_VIDEOGAMES,
                payload:allVg.data
            });
        }
   }catch(error){
    console.error(error)
   }
}



export function createVideoGame(data){
    return async function (){
        const json=await axios.post("/create",data);
        return json
    }
}



export function getGenres() {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/genres?key=574a2e1d874a498db48bf6179e7cbd2a`);
        const allGenres = response.data;
        dispatch({
          type: GET_GENRES,
          payload: allGenres,
        });
      } catch (error) {
        console.error(error);
      }
    };
  }




export function filterByGenre(payload){
    return{
        type:FILTER_BY_GENRE,
        payload,
    }
}

export function orderByName(payload){
    return{
        type:ORDER_BY_NAME,
        payload,
    };
}

export function orderByRating(payload){
    return{
        type:ORDER_BY_RATING,
        payload,
    };
}

export function filterOrigin (payload){
    return { type: FILTER_BY_ORIGIN, payload };
};

export function clearVideogames (){
    return{
        type:CLEAR_VIDEOGAMES
    }
}

export function setPage (){
    return{
        type:SET_PAGE
    }
}