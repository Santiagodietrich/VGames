const {Genre}=require("../db");
const axios=require("axios");


const Genres=async (req, res)=>{
    
    let genres=await Genre.findAll();// Consulto todos los registros de géneros en la base de datos

    if(genres.length ===0){
        try{
            let genres=await axios(`https://api.rawg.io/api/genres?key=574a2e1d874a498db48bf6179e7cbd2a`)

            let array=[]; // Creo un array para almacenar los nombres de los géneros

            for(let i=0;i< genres.data.results.length;i++){// Itero sobre los resultados de la API y guardo los nombres en el array
                array.push(genres.data.results[i].name);
                await Genre.create({name:genres.data.results[i].name});// Creo registros en la base de datos para cada género
            }

            return res.status(200).json(array);

        }catch(error){
            return res.status(400).send("Error");
        }
    }else{
         // Si ya hay géneros en la base de datos, creo un array con sus nombres
        let array=[];
        genres.map((el)=>array.push(el.name));
        return res.status(200).json(array);
    }

}
module.exports=Genres;