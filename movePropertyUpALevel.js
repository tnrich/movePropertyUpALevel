module.exports = function movePropertyUpALevel(parentObject, propertyName) {
	var objectToBeMoved = parentObject[propertyName];
	Object.keys(objectToBeMoved).forEach(function(key) {
		parentObject[key] = objectToBeMoved[key];
	});
	delete parentObject[propertyName];
};
