import express from "express"
import getGames from "../controllers/game.js"
import createGame from "../controllers/game.js"

const router = express.Router()

router.get("/game", getGames)
router.get("/game:create", createGame)


export default router;