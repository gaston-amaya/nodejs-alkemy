/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Movie from "../models/Movies";

const Genres = sequelize.define(
  'genres',
  {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   picture: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    },
  },
  {
    timestamps: false,
  }
);


sequelize.sync({ force: true })

export default Genres;