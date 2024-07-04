import { Router } from "express";
import { getAllPokemon, getOnePokemon, getOneInfo } from "../../controller/pokemon/pokemonController.js";

const router = Router();

router.route('/').get(getAllPokemon);
router.route('/:id').get(getOnePokemon);
router.route('/:id/:info').get(getOneInfo)
export default router;
