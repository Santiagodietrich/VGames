const axios=require('axios');
const {Videogame,Genre}=require('../db');

const createVideoGame=async(req,res)=>{
    try{
    
    const{name,description,released,rating,platforms,genres}=req.body;

   

    if(!name || !description || !released || !rating || !platforms || !genres)
    return res.status(400).json({message:"Faltan Parametros"});

    
        const newGame=await Videogame.create({
            name,
            description,
            released,
            rating,
            platforms,
            genres,
        });

        const vg_genre = await Genre.findAll({
            where:{name : genres}
        })
        await newGame.setGenres(vg_genre);//aqui se realiza la relacion entre los modelos Genre y Videogame


        return res.status(200).json(newGame)
       
    } catch(error){
        console.error(error)
        return res.status(500).json({error:"Error en alguno de los datos"})
    }

}

module.exports=createVideoGame;


