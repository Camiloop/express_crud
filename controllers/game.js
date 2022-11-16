import Games from "../models/games.js";

const getGames = async (req, res) => {
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

export default getGames;
