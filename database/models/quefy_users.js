/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";


const init_quefy_users = (sequelize, Types) => {
  class quefy_users extends Model {}
  quefy_users.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      birthDate: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      type: DataTypes.INTEGER,
      desc: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "quefy_users",
    }
  );

  return quefy_users;
};

export default init_quefy_users(connection, DataTypes);