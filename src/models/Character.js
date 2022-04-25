/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Character = sequelize.define(
  'characters',
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

sequelize.sync({ force: true })

export default Character;