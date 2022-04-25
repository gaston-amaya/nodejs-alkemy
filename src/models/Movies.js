/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Character from "../models/Character";

const Movie = sequelize.define(
  'movies',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    picture: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    },
    creationdate: {
      type: Sequelize.DATE,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  },
  {
    timestamps: false,
  }
);



Movie.belongsToMany(Character, {through: "moviecharacters"})
Character.belongsToMany(Movie, {through:"moviecharacters"})

sequelize.sync({ force: true })

export default Movie;