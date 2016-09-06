const Sequelize = require('sequelize');

const sequelize = require('./config/database');
const User = require('./users/userModel');
const userController = require('./users/userController');
const Trip = require('./trips/tripModel');
const tripController = require('./trips/tripController');

const testUser1 = User.create({
  firstName: 'Luke',
  lastName: 'SkyWalker',
  password: '123',
  email: 'lskywalker@gmail.com',
  description: 'Let's go on an adventure to a galaxy far, far away'
});

const testUser2 = User.create({
  firstName: 'Han',
  lastName: 'Solo',
  password: '123',
  email: 'hsolo@gmail.com',
  description: 'I have the fastest car in the galaxy'
});

const testUser2 = User.create({
  firstName: 'R2D2',
  lastName: 'Droid',
  password: '123',
  email: 'r2d2@gmail.com',
  description: 'I'm an excellent navigator'
});

const testUser4 = User.create({
  firstName: 'Darth',
  lastName: 'Vader',
  password: '123',
  email: 'dvader@gmail.com',
  description: 'My car is named Star Destroyer'
});


const testUser5 = User.create({
  firstName: 'Obi-Wan',
  lastName: 'Kenobi',
  password: '123',
  email: 'owkenobi@gmail.com',
  description: 'I used to have a single braid in my hair. Now I'm a robe-wearing burner'
});
