'use strict';

const app = require('./app');
const api = require('./api');
const routes = require('./routes');
// const controllers = require('./controllers');
// const events = require('./event');

app.start();
app.config({
	routes: routes,
	// controllers: controllers,
	// events: events
});

api.connect(app);