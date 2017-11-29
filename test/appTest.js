const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
// const app = require('../app');

describe('App',function(){
	it('sayHelo should return hello',function(){
		let result = sayHello();
		assert.equal(result,'hello');
	});
	
});