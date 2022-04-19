import { Router } from 'express';
const router = Router();

import {createGenre, getGenres, deleteGenre, updateGenre} from '../controllers/genre.controller';


// api/movies/

// get characters
router.get('/', getGenres);

// create characters
router.post('/', createGenre); 

// delete characters 
router.delete('/:id', deleteGenre)

// update characters
 router.put('/:id', updateGenre)

export default router;