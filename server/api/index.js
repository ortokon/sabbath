'use strict';

function API(container){
	this.container = container;
}

function connect (container) {
	let api = new API(container);
	return commonApi(api);
}

function commonApi(api) {
	return {
		use: null
	}
}

module.exports = {
	connect: connect
};