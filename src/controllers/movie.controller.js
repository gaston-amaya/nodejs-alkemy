/** @format */
import Movie from "../models/Movies";
import Genres from "../models/Genre";
import Character from "../models/Character";

// CRUD
// get all the movies but only shows 'picture, title and creationdate' attributes

export async function getMovies(_req, res) {
  const values = await Movie.findAll({
    attributes: [
      "picture",
      "title",
      "creationdate",
    ],
  });
  res.json({
    data: values,
  });
}

// create a movie

export async function createMovie(req, res) {
  const { pciture, title, creationdate, rating } = req.body;
  try {
    let newMovie = await Movie.create(
      {
        pciture,
        title,
        creationdate,
        rating,
      },
      {
        fields: ["picture", "title", "creationdate", "rating"],
      }
    );
    return res.json(newMovie);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

// delete a movie
export async function deleteMovie(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Movie.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Movie Deleted succesfully",
    count: deleteRowCount,
  });
}

// update a movie

export async function updateMovie(req, res) {
  const { id } = req.params;
  const { picture, title, creationdate, rating } =
    req.body;
  try {
    const movie = await Movie.findByPk(id);
    movie.picture = picture;
    movie.title = title;
    movie.creationdate = creationdate;
    movie.ration = rating;
    await movie.save();

    res.json({
      message: "Movie Updated Successfully",
      data: movie,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
}
