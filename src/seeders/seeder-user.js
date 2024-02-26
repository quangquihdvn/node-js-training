'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'quangquihdvn@gmail.com',
      password: '123456',
      firstName: 'Quang',
      lastName: 'Qui',
      address: 'Ha Noi',
      gender: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
