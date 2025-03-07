import express from 'express';
import {
    addMovie,
    getAllMovies,
    getMovieById,
    deleteMovie,
} from '../controller/movieController.js';

const router = express.Router();

router.post('/movies', addMovie);

router.get('/movies', getAllMovies);

router.get('/movies/:id', getMovieById);

router.delete('/movies/:id', deleteMovie);

export default router;