const Sequelize = require('sequelize');

const sequelize = require('./config/database');
const User = require('./users/userModel');
const userController = require('./users/userController');
const Trip = require('./trips/tripModel');
const tripController = require('./trips/tripController');

const trip1 = Trip.create({
  driverName: 'Luke',
  tripDate: '9/27/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '270 7th St',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Honda',
  vehicleModel: 'Civic',
  vehicleYear: 2008,
  description: 'Going up north to look for my father'

});

const trip2 = Trip.create({
  driverName: 'Luke',
  tripDate: '10/1/2016 1:00 PM',
  startSt: '66 Mint St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1933 Euclid St',
  endCity: 'San Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Honda',
  vehicleModel: 'Civic',
  vehicleYear: 2008,
  description: 'Going up south to look for my sister'

});

const trip3 = Trip.create({
  driverName: 'Luke',
  tripDate: '10/4/2016 1:00 PM',
  startSt: '530 S. Hewitt St',
  startCity: 'Los Angeles',
  startState: 'CA',
  endSt: '375 Valencia St,',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Honda',
  vehicleModel: 'Civic',
  vehicleYear: 2008,
  description: 'Going up north to join Obi-wan'

});

const trip4 = Trip.create({
  driverName: 'Luke',
  tripDate: '10/10/2016 1:00 PM',
  startSt: '3139 Mission St,',
  startCity: 'San Franisco',
  startState: 'CA',
  endSt: '413 Santa Monica Blvd',
  endCity: 'San Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Honda',
  vehicleModel: 'Civic',
  vehicleYear: 2008,
  description: 'Going up south to train with Yoda'

});

const trip5 = Trip.create({
  driverName: 'Luke',
  tripDate: '10/13/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '270 7th St',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Honda',
  vehicleModel: 'Civic',
  vehicleYear: 2008,
  description: 'Going up north to look for my father'

});

const trip6 = Trip.create({
  driverName: 'Han',
  tripDate: '9/29/2016 1:00 PM',
  startSt: '930 Broadway',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '1415 Larkin St, San Francisco',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 4,
  seatPrice: 20,
  vehicleMake: 'Ford',
  vehicleModel: 'Explorer',
  vehicleYear: '2012',
  description: 'Looking for a few excellent road mates'

});

const trip7 = Trip.create({
  driverName: 'Han',
  tripDate: '10/1/2016 1:00 PM',
  startSt: '1415 Larkin St, San Francisco',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1725 Broadway, Santa Monica',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 4,
  seatPrice: 20,
  vehicleMake: 'Ford',
  vehicleModel: 'Explorer',
  vehicleYear: 2012,
  description: 'Road trip time, lets get weird'

});

const trip8 = Trip.create({
  driverName: 'Han',
  tripDate: '10/3/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '1725 Broadway, Santa Monica',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 4,
  seatPrice: 20,
  vehicleMake: 'Ford',
  vehicleModel: 'Explorer',
  vehicleYear: 2012,
  description: 'Road trip time, lets get weird'

});

const trip9 = Trip.create({
  driverName: 'Han',
  tripDate: '10/8/2016 1:00 PM',
  startSt: '1511 Montana Ave',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '270 7th St, San Francisco',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 4,
  seatPrice: 20,
  vehicleMake: 'Ford',
  vehicleModel: 'Explorer',
  vehicleYear: 2012,
  description: 'Party time'

});


const trip10 = Trip.create({
  driverName: 'Han',
  tripDate: '10/11/2016 1:00 PM',
  startSt: '880 Harbor Island Dr',
  startCity: 'San Diego',
  startState: 'CA',
  endSt: '442 N Fairfax Ave',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 4,
  seatPrice: 20,
  vehicleMake: 'Ford',
  vehicleModel: 'Explorer',
  vehicleYear: 2012,
  description: 'Party time'

});

const trip11 = Trip.create({
  driverName: 'R2D2',
  tripDate: '9/27/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '270 7th St',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Toyota',
  vehicleModel: 'Prius',
  vehicleYear: 2010,
  description: 'Beep wooooo beep bop '

});

const trip12 = Trip.create({
  driverName: 'R2D2',
  tripDate: '9/29/2016 1:00 PM',
  startSt: '270 7th St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '525 Santa Monica Blvd',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Toyota',
  vehicleModel: 'Prius',
  vehicleYear: 2010,
  description: 'Beep wooooo beep bop '

});

const trip13 = Trip.create({
  driverName: 'R2D2',
  tripDate: '10/1/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '530 South Hewitt St',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Toyota',
  vehicleModel: 'Prius',
  vehicleYear: 2010,
  description: 'Beep wooooo beep bop '

});

const trip14 = Trip.create({
  driverName: 'R2D2',
  tripDate: '10/4/2016 1:00 PM',
  startSt: '525 Santa Monica Blvd',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '270 7th St',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Toyota',
  vehicleModel: 'Prius',
  vehicleYear: 2010,
  description: 'Beep wooooo beep bop '

});

const trip15 = Trip.create({
  driverName: 'R2D2',
  tripDate: '10/7/2016 1:00 PM',
  startSt: '1415 Larkin St, San Francisco',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1935 Euclid St.',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Toyota',
  vehicleModel: 'Prius',
  vehicleYear: 2010,
  description: 'Beep wooooo beep bop '

});


const trip16 = Trip.create({
  driverName: 'Darth',
  tripDate: '9/20/2016 1:00 PM',
  startSt: '1415 Larkin St, San Francisco',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '526 S Main St',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 40,
  vehicleMake: 'Mercedes',
  vehicleModel: 'E-Class',
  vehicleYear: 2017,
  description: 'Come to the dark side'

});

const trip17 = Trip.create({
  driverName: 'Darth',
  tripDate: '9/25/2016 1:00 PM',
  startSt: '1415 Larkin St, San Francisco',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1935 Euclid St.',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 40,
  vehicleMake: 'Mercedes',
  vehicleModel: 'E-Class',
  vehicleYear: 2017,
  description: 'Come to the dark side'

});


const trip18 = Trip.create({
  driverName: 'Darth',
  tripDate: '9/28/2016 1:00 PM',
  startSt: '1939 Euclid St',
  startCity: 'Santa Monica',
  startState: 'CA',
  endSt: '1415 Larkin St, San Francisco',
  endCity: 'San Francisco',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 40,
  vehicleMake: 'Mercedes',
  vehicleModel: 'E-Class',
  vehicleYear: 2017,
  description: 'Come to the dark side'

});


const trip19 = Trip.create({
  driverName: 'Darth',
  tripDate: '10/1/2016 1:00 PM',
  startSt: '1026 Valencia St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '510 South Hewitt St.',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 40,
  vehicleMake: 'Mercedes',
  vehicleModel: 'E-Class',
  vehicleYear: 2017,
  description: 'Come to the dark side'

});


const trip20 = Trip.create({
  driverName: 'Darth',
  tripDate: '10/10/2016 1:00 PM',
  startSt: '1026 Valencia St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1937 Euclid St.',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 20,
  vehicleMake: 'Mercedes',
  vehicleModel: 'E-Class',
  vehicleYear: 2017,
  description: 'Come to the dark side'

});

const trip21 = Trip.create({
  driverName: 'Obi-Wan',
  tripDate: '9/20/2016 1:00 PM',
  startSt: ' 2123 Fillmore St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '530 South Hewitt St',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 10,
  vehicleMake: 'Volkswagen',
  vehicleModel: 'Beatle',
  vehicleYear: 1971,
  description: 'Come to the light side brother'

});

const trip22 = Trip.create({
  driverName: 'Obi-Wan',
  tripDate: '9/25/2016 1:00 PM',
  startSt: '530 Mateo St',
  startCity: 'Los Angeles',
  startState: 'CA',
  endSt: '3365 India St',
  endCity: 'San Diego',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 10,
  vehicleMake: 'Volkswagen',
  vehicleModel: 'Beatle',
  vehicleYear: 1971,
  description: 'Come to the light side brother'

});


const trip23 = Trip.create({
  driverName: 'Obi-Wan',
  tripDate: '9/28/2016 1:00 PM',
  startSt: '1026 Valencia St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '1937 Euclid St.',
  endCity: 'Santa Monica',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 10,
  vehicleMake: 'Volkswagen',
  vehicleModel: 'Beatle',
  vehicleYear: 1971,
  description: 'Come to the light side brother'

});


const trip24 = Trip.create({
  driverName: 'Obi-Wan',
  tripDate: '10/5/2016 1:00 PM',
  startSt: '6429 Selma Ave',
  startCity: 'Los Angeles',
  startState: 'CA',
  endSt: '2044 Kettner Blvd',
  endCity: 'San Diego',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 10,
  vehicleMake: 'Volkswagen',
  vehicleModel: 'Beatle',
  vehicleYear: 1971,
  description: 'Come to the light side brother'

});


const trip25 = Trip.create({
  driverName: 'Obi-Wan',
  tripDate: '11/1/2016 1:00 PM',
  startSt: '1026 Valencia St',
  startCity: 'San Francisco',
  startState: 'CA',
  endSt: '6429 Selma Ave',
  endCity: 'Los Angeles',
  endState: 'CA',
  numSeats: 3,
  seatPrice: 10,
  vehicleMake: 'Volkswagen',
  vehicleModel: 'Beatle',
  vehicleYear: 1971,
  description: 'Come to the light side brother'

});
