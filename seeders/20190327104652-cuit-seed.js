'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Cuits', 
        [
          {
            body: 'CUIT -1',
            UserId: 1,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -2',
            UserId: 7,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -3',
            UserId: 4,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -4',
            UserId: 2,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -5',
            UserId: 5,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -6',
            UserId: 3,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'CUIT -7',
            UserId: 1,
            createdAt: new Date,
            updatedAt: new Date
          },
          
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Cuits', null, {});
  }
};
