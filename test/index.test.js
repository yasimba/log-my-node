const lg = require('..');
const chai = require('chai');
const sinon = require('sinon');
require('mocha-sinon');

beforeEach(function() {
  sinon.spy(console, 'log');
});

afterEach(function() {
  console.log.restore();
});

it('should return a string', function () {
  const output = lg.log("hello")
  chai.expect(output).to.be.a("string");
});


it('should expect verbose to be a bool', function () {
  const verboseErr = "Expected verbose to be of type error";
  const output = lg.log("hello", {verbose: "hello"})  
  chai.expect(output).to.be.a("string");
  chai.expect(output).to.equal(verboseErr);
});

it('should log correctly', function() {
  const output = lg.log(5);
  chai.expect( console.log.calledOnce ).to.be.true;
  chai.expect(output).to.equal(5);
});
