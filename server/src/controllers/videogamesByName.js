
const axios = require("axios");
const { Videogame, Genre } = require("../db");
// const { Op } = require("sequelize");

const videogamesByName = async (req, res) => {
  try {
    const videogameDb = async () => { // Defino una función asíncrona para obtener info de los videojuegos de la base de datos 
      return await Videogame.findAll({
        include: Genre,
      });
    };

    const videogameAPI = async () => {
        const { name } = req.query;
        
      const responseUno = await axios.get(
        `https://api.rawg.io/api/games?key=574a2e1d874a498db48bf6179e7cbd2a&search=${name}&page_size=15`
      );
      const receivedData = responseUno.data;

      if (receivedData && receivedData.results) {
        const mapeo = receivedData.results.map((m) => {
          const platforms = m.platforms.map((e) => e.platform.name);

          return {
            id: m.id,
            name: m.name,
            released: m.released,
            background_image: m.background_image,
            rating: m.rating,
            platforms: platforms,
            description: m.description,
            genres: m.genres,
          };
        });
        return mapeo;
      } else {
        throw new Error("Datos de la API no son válidos");
      }
    };

    // Llamo a la función para obtener todos los juegos y espera a que se complete antes de continuar
    const dbInfo = await videogameDb();
    // Llamo a la función para obtener información de la API y esperaa que se complete
    const apiData = await videogameAPI();
    // Concateno la información de la base de datos y la API
    const total = apiData.concat(dbInfo);

    // Envía la respuesta al cliente
    res.status(200).json(total);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = videogamesByName;
