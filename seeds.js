const fs = require('fs');

const users = JSON.parse(fs.readFileSync('user-seed.json', 'utf8'));
const cuits = JSON.parse(fs.readFileSync('cuit-seed.json', 'utf8'));

module.exports = {users, cuits};