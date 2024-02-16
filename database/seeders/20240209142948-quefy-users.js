'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "quefy_users",
      [
        {
          userName: "eric",
          password: "111",
          fullName: "Eric Cantona",
          phoneNumber: "12344442226",
          email: "eric@gmail.com",
          gender: 1,
          birthDate: "1992-3-24",
          status: 1,
          type: 1,
          desc: "aaaaaaaaaaaaaaaaaaaa"
        },
        {
          userName: "reo",
          password: "222",
          fullName: "Reo Essien",
          phoneNumber: "13943992313",
          email: "reo@gmail.com",
          gender: 2,
          birthDate: "1991-6-4",
          status: 2,
          type: 2,
          desc: "bbbbbbbbbbbbbbbbbbbbbbb"
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
