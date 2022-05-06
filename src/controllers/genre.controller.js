import Genres from "../models/Genre";

// get genre but only show the data picture and name
export async function getGenres(_req, res) {
  
  const values = await Genres.findAll({
    attributes: ["picture", "name"],
  });
  res.json({
    data: values,
  });
}

// create a genre
export async function createGenre(req, res) {
  const { pciture, name} = req.body;
  try {
    let newGenre = await Genres.create(
      {
        pciture,
        name,
        
      },
      {
        fields: ["picture", "name"],
      }
    );
    return res.json(newGenre);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.status(200).json("Genre added successfully");
}

// delete a character
export async function deleteGenre(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Genres.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Genre Deleted succesfully",
    count: deleteRowCount,
  });
}

// update a genre

 export async function updateGenre(req, res) {
  const { id } = req.params;
  const { picture, name} =
    req.body;
  try {
    await Genres.findByPk(
      id
    );
    Genres.picture = picture;
    Genres.name = name;
    await Genres.save();

    res.json({
      message: "Genre Updated Successfully",
      data: Genres,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
}
