const {Router} = require('express');
const route = Router();

//One of the route handler
route.use('/users',require('./users'));

module.exports = route;