var assert = require('assert');
var util = require('util');
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

console.log('fakeObj.first.hey: ' + fakeObj.first.hey);
//'you'
console.log('fakeObj.poodle: ' + fakeObj.poodle);
//undefined


assert.equal('you',fakeObj.first.hey);
assert.equal(undefined,fakeObj.poodle);


fakeObj = {
	dog: {
		notes: [
			{
				inData: {
					value: 'thomas',
					name: 'doowop'
				}
			}
		],
		second: 'meAgain'
	}
};
fakeObj.dog.notes.forEach(function(note){
	movePropertyUpALevel(note, 'inData');
});

console.log(JSON.stringify(fakeObj, null, 4));

// assert.equal(undefined,fakeObj.poodle);