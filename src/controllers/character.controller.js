/** @format */

import res from "express/lib/response";
import Character from "../models/Character";

// get character but only show the data picture and name
export async function getCharacters(req, res) {
  const values = await Character.findAll({
    attributes: ["picture", "name"],
  });
  res.json({
    data: values,
  });
}

// create a character
export async function createCharacter(req, res) {
  const { picture, name, age, weight, story } =
    req.body;
  try {
    let newCharacter = await Character.create(
      {
        picture,
        name,
        age,
        weight,
        story,
      },
      {
        fields: [
          "picture",
          "name",
          "age",
          "weight",
          "story",
        ],
      }
    );
   
    if (newCharacter){
      return res.json({
        message:
          "Character has been added successfully",
        data: newCharacter,
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

// delete a character
export async function deleteCharacter(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Character.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Character Deleted succesfully",
    count: deleteRowCount,
  });
}

// update a character

 export async function updateCharacter(req, res) {
  const { id } = req.params;
  const { picture, name, age, weight, story } =
    req.body;
  try {
    const character = await Character.findByPk(
      id
    );
    character.picture = picture;
    character.name = name;
    character.age = age;
    character.weight = weight;
    character.story = story;
    await character.save();

    res.json({
      message: "Character Updated Successfully",
      data: character,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
}


