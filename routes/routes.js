import express from "express"
import getGames from "../controllers/game.js"
import createGame from "../controllers/game.js"
import { isUserAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.get("/game", [isUserAuthenticated], getGames)
router.get("/game/:create", [isUserAuthenticated], createGame)


export default router;