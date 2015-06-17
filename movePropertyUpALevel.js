module.exports = function movePropertyUpALevel(parentObject, propertyName) {
	var objectToBeMoved = fakeObj[propertyName];
	Object.keys(objectToBeMoved).forEach(function(key) {
		console.log('key: ' + key);
		parentObject[key] = objectToBeMoved[key];
	});
	delete fakeObj[propertyName];
};
