#movePropertyUpALevel
A simple function that takes an object and a property name and moves the property up a level in the object

#Useage

```
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
```