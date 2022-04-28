/** @format */
import Movie from "../models/Movies";
import Genres from "../models/Genre";
import Character from "../models/Character"

// CRUD
// get all the movies but only shows 'picture, title and creationdate' attributes

export async function getMovies(req, res){
  if(!req.query.name && !req.query.genre && !req.query.order){
      Movie.findAll({
          attributes: ['title', 'picture', 'creationdate']    
      }).then(movie => { 
          if(movie){
              res.status(200).send(movie);
          } else {
              res.status(400).send('couldnt find the movie')
          }
      })
  }

  // search by title
  if(req.query.name){
      Movie.findOne({
          where: {
              'title': req.query.name
          }
      }).then(movie => { 
          if(movie){
              res.status(200).send(movie);
          } else {
              res.status(400).send('we couldnt find the movie');
          }
      })
  }
/*
  // search by genre
  if(req.query.genre){
      Movie.findAll({
          where: {
              genre: req.query.genre
          },
          attributes: ['title', 'picture', 'creationdate']
      }).then(movie => { 
          if(movie.length === 0){ 
              res.status(400).send('we couldnt find movies with that genre');
          } else {
              res.status(200).send(movie);
          }
      })
  }
  */

  // asc and desc order
  if(req.query.order){
      Movie.findAll({
          order: [[ 'title', req.query.order ]],
          attributes: ['title', 'picture', 'creationdate']
      }).then(movie => { 
          if(movie){
              res.status(200).send(movie);
          } else {
              res.status(400).send('make sure to order by asc and desc')
          }
      })
  }
}


// create a movie
export async function createMovie(req, res) {
  const { picture, title, creationdate, rating } =
    req.body;
  try {
    let newMovie = await Movie.create(
      {
        picture,
        title,
        creationdate: new Date(
          creationdate
        ).getTime(),
        rating,
      },

      {
        fields: [
          "picture",
          "title",
          "creationdate",
          "rating",
        ],
      }
    );

    if (newMovie) {
      return res.json({
        message:
          "Movie has been added successfully",
        data: newMovie,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      data: {},
    });
  }
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
