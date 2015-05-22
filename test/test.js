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
		it('reverse string "This is true"', function(){
			expect("This is true".reverse()).to.equal("eurt si sihT");
		})
	});
	describe('reverse()', function(){
		it('reverse string "Love"', function(){
			expect("Love".reverse()).to.equal("voL");
		})
	});
	describe('wordcount()', function(){
		it('wordcount string "Hello world"', function(){
			expect("Hello world world".wordcount()).to.equal('world: 2, Hello: 1');
		})
	});
});