var assert = require('assert');
var movePropertyUpALevel = require('./movePropertyUpALevel');
var fakeObj = {
	poodle: {
		first: {
			hey: 'you'
		},
		second: 'meAgain'
	}
};
movePropertyUpALevel(fakeObj, 'poodle');

console.log(fakeObj.first.hey);
//'you'
console.log(fakeObj.poodle);
//undefined


assert.equal('you',fakeObj.first.hey);
assert.equal(undefined,fakeObj.poodle);