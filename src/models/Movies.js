/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Genres from "./Genre";


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

// association with genre

Movie.belongsTo(Genres, {
  foreignKey: "genreid",
  targetKey: "id",
})


sequelize.sync({ force: true })

export default Movie;