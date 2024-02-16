import { quefy_users } from "../database/models";
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// ----------------------------------------------------------------
export default async function create_user({ userName, password, fullName, phoneNumber, email, gender, birthDate, status, type, desc }) {
  const users = await quefy_users.create({
    userName: userName,
    password: password,
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
    gender: gender,
    birthDate: birthDate,
    status: status,
    type: type,
    desc: desc
  });
  
  return users.dataValues;
}

//--------------------------------------------------------------------------
export async function fetch_users(userName, fullName, phoneNumber, email) {
  const { Op } = require("sequelize");
  const allUsers = await quefy_users.findAll();
  // {
  //   attributes: ['userName', 'fullName', 'phoneNumber', 'email'],
  //   where: {
  //     [Op.or]: [
  //         {userName:userName}, 
  //         {fullName:fullName},
  //         {phoneNumber:phoneNumber},
  //         {email:email},
  //         //{gender: gender},
  //         //{birthDate: birthDate},
  //         //{status: status},
  //         //{type: type},
  //         //{desc: desc}
  //       ]
  //   }
  // });

  return allUsers;
}

export async function update_user(reqData) {
  
  const updated_user = await quefy_users.update({
    userName: reqData.userName, 
    password: reqData.password, 
    fullName: reqData.fullName, 
    phoneNumber: reqData.phoneNumber, 
    email: reqData.email,
    gender: reqData.gender,
    birthDate: reqData.birthDate, 
    status: reqData.status, 
    type: reqData.type, 
    desc: reqData.desc}, {
    where: {id: reqData.id}
  });

    
  return updated_user;
}

export async function delete_user(id) {
  const deleted_user = await quefy_users.findByPk(id);

  const res = await quefy_users.destroy({
    where: {
      id: id
    }
  });
  
  return deleted_user;
} 