'use strict';

const entry = './index.html';

function router(on, make){
	return function (app) {
		app[on.method](on.route, make);
	};
}

function get(url, resp){
	return router({
		method: 'get',
		route: url
	}, resp);
}

const main = (req, res, next) => {
	res.sendFile(entry);
};

const other = (req, res, next) => {
	res.send(req.params.test);
};

module.exports = [
	get('/', main),
	get('/:test', other)
];