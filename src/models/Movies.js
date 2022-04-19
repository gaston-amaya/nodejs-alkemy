/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Movie = sequelize.define(
  'movies',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
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

sequelize.sync({ force: true })

export default Movie;