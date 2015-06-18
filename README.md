[![Build Status](https://travis-ci.org/tnrich/movePropertyUpALevel.svg?branch=master)](https://travis-ci.org/tnrich/movePropertyUpALevel)

#movePropertyUpALevel
A simple function that takes an object and a property name and moves the property up a level in the object

#Useage

```
	var movePropertyUpALevel = require('move-property-up-a-level');
	
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
```