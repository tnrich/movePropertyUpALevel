var assert = require('assert');
var movePropertyUpALevel = require('./movePropertyUpALevel');
movePropertyUpALevel(fakeObj, 'serialize');
var fakeObj = {
	poodle: {
		first: {
			hey: 'you'
		},
		second: 'meAgain'
	}
};

console.log('fakeObj.first.hey: ' + fakeObj.first.hey);
//'you'
console.log('fakeObj.poodle: ' + fakeObj.poodle);
//undefined


assert.equal('you'===fakeObj.first.hey);
assert.equal(undefined===fakeObj.poodle);