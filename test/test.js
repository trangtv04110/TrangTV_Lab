//var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("../StringExtend.js");
describe('String', function(){
  	describe('#reverse()', function(){
    	it('reverse string "Hello world"', function(){
			expect("Hello world".reverse()).to.equal("dlrow olleH");
    	})
  	});
	describe('#reverse()', function(){
		it('reverse string "Hello world"', function(){
			expect("Hello world".reverse()).to.equal("dlrow olle");
		})
	})
});