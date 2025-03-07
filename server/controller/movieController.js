import Movie from '../models/movieModel.js';

export const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllMovies = async (req, res) => {
    try {
        res.status(200).json(await Movie.find());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};