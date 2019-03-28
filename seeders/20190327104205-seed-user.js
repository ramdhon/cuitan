'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Users', [
        {
          first_name: 'John',
          last_name: 'Doe',
          username: 'jdoe',
          password:'johnydoe',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          first_name: 'John',
          last_name: 'Does',
          username: 'jdoe',
          password:'johnydoe',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          first_name: 'John',
          last_name: 'Dont',
          username: 'jdoe',
          password:'johnydoe',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          first_name: 'Jane',
          last_name: 'Doe',
          username: 'jdoe',
          password:'johnydoe',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          first_name: 'Jane',
          last_name: 'Does',
          username: 'jdoes',
          password:'johnydoe',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          first_name: 'Jane',
          last_name: 'Dont',
          username: 'jadont',
          password:'jdoe1234',
          bio:'Good guy',
          createdAt: new Date,
          updatedAt: new Date
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
