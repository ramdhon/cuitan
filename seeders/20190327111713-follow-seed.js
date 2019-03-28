'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Follows', [
          {
          UserId: 1,
          FollowingId: 2,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 1,
          FollowingId: 3,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 1,
          FollowingId: 4,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 2,
          FollowingId: 3,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 2,
          FollowingId: 4,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 3,
          FollowingId: 1,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 5,
          FollowingId: 2,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 6,
          FollowingId: 1,
          createdAt : new Date,
          updatedAt: new Date
        },{
          UserId: 1,
          FollowingId: 5,
          createdAt : new Date,
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
     return queryInterface.bulkDelete('Follows', null, {});
  }
};
