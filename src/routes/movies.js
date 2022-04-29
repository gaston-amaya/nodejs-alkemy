import { Router } from 'express';
const router = Router();

import {createMovie, getMovies, deleteMovie, updateMovie} from '../controllers/movie.controller';


// api/movies/

// get movies
router.get('/', getMovies);

// create a movie 
router.post('/', createMovie); 

// delete a movie 
router.delete('/:id', deleteMovie);

// update a movie
router.put('/:id', updateMovie)


export default router;