/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Movie from "../models/Movies";

const Character = sequelize.define(
  'character',
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
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    story: {
        type: Sequelize.TEXT,
        allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

Movie.belongsToMany(Character, {through: "moviecharacters"})
Character.belongsToMany(Movie, {through:"moviecharacters"})

sequelize.sync({ force: true })

export default Character;