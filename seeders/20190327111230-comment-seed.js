'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Comments', [
          {
            body: 'comment cuit 1',
            CuitId: 1,
            UserId: 1,
            CommentId: null,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'reply comment cuit 1',
            CuitId: 1,
            UserId: 2,
            CommentId: 1,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'reply comment cuit 2',
            CuitId: 1,
            UserId: 3,
            CommentId: null,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'comment cuit 2',
            CuitId: 2,
            UserId: 2,
            CommentId: null,
            createdAt: new Date,
            updatedAt: new Date
          },{
            body: 'reply - reply comment cuit 2',
            CuitId: 1,
            UserId: 2,
            CommentId: 1,
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
     return queryInterface.bulkDelete('Comments', null, {});
  }
};
