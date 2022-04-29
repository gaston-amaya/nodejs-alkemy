/** @format */

import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.TEXT,
    },
    password: {
      type: Sequelize.TEXT,
    },
    registered: {
      type: Sequelize.DATE,
    },
    last_login: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync({ force: true });

export default User;
