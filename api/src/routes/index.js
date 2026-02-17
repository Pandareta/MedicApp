var express = require('express');
var router = express.Router();
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');

// If USE_FAKE_DB=true we only mount the dummy routes to allow running without MongoDB.
let routesUser, routesDoctor, routesPatient, routesAdmin, routesAuth, routesProfile, routesAppoinment, routesFavoritos, routesStripe;
if (process.env.USE_FAKE_DB !== 'true') {
	routesUser = require('./users');
	routesDoctor = require('./doctor');
	routesPatient = require('./patient');
	routesAdmin = require('./admin');
	routesAuth = require('./auth');
	routesProfile = require('./profile');
	routesAppoinment = require('./appointment');
	routesFavoritos = require('./favorite');
	routesStripe = require('./stripe');
}

/* GET home page. */
if (process.env.USE_FAKE_DB === 'true') {
	// Only dummy routes
	router.use('/dummy', dummyRoutes);
} else {
	router.use('/users', routesUser);
	/* GET dummy routes. */
	router.use('/dummy', dummyRoutes );
	/* Profiles routes */
	router.use('/profile', routesProfile);
	/* Auth routes */
	router.use('/auth', routesAuth);
	/* Doctor routes */
	router.use('/doctors', routesDoctor);
	/* Patient routes */
	router.use('/patients', routesPatient);
	/* Patient routes */
	router.use('/favorites', routesFavoritos);
	/* Admin routes */
	router.use('/admins', routesAdmin);
	/* Appointment routes */
	router.use('/appointments', routesAppoinment);
	router.use('/stripe', routesStripe);
}

module.exports = router;
