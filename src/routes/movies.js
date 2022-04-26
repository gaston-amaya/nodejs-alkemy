import { Router } from 'express';
const router = Router();

import {createMovie, getMovies, deleteMovie, updateMovie, queryMovie} from '../controllers/movie.controller';


// api/movies/

// get movies

router.get('/', getMovies, queryMovie);

// create a movie 

router.post('/', createMovie); 

// delete a movie 

router.delete('/:id', deleteMovie);
// update a movie

 router.put('/:id', updateMovie)


export default router;