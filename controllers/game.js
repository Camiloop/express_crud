import Games from "../models/games.js";

const getGames = async (requ, res) => {
  try {
    const game = await Games.findAll();
    res.send(game);
  } catch (err) {
    console.log(err);
  }
};

export const createGame = async (req, res) => {
  try {
    await Games.create(req.body);
    res.json({
      message: "Game added!",
    });
  } catch (err) {
    console.log(err);
  }
};

// No hice todas las funciones CRUD porque perdi mucho tiempo buscando porque mi base de datos no se conectaba xD

export default getGames;
