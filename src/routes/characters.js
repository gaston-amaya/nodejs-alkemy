import { Router } from 'express';
const router = Router();

import {createCharacter, getCharacters, deleteCharacter, updateCharacter} from '../controllers/character.controller';


// api/movies/

// get characters
router.get('/', getCharacters);

// create characters
router.post('/', createCharacter); 

// delete characters 
router.delete('/:id', deleteCharacter)

// update characters
 router.put('/:id', updateCharacter)

export default router;