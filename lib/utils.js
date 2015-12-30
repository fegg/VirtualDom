var utils = {};

utils.isString = function(some) {
	return Object.prototype.toString.call(some) === '[object String]';
}

utils.isArry = function(some){
	return Object.prototype.toString.call(some) === '[object Array]';
}



module.exports = utils;
