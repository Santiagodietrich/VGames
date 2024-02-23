const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const allVideogames=require("../controllers/allVideogames");
const videogamesId=require("../controllers/videogamesId");
const videogamesByName=require("../controllers/videogamesByName");
const createVideoGame=require("../controllers/createVideoGame");
const genres=require("../controllers/genres");
const router = Router();

router.use("/videogames",allVideogames);
router.get("/videogames-:id",videogamesId);
router.get("/name",videogamesByName);
router.post("/create",createVideoGame);
router.get("/genres",genres)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
