const mocha = require('mocha');
const chai = require('chai');

const strReverse = require('../strReverse');

const expect = chai.expect;

describe('Reverse String Test', () => {
	it('Checks if the strings are reversed', () => {
		let str1 = strReverse('You smell nice!');
		let str2 = strReverse('That what is dead may never die!');

		expect(str1).to.equal('!ecin llems uoY');
		expect(str2).to.equal('!eid reven yam daed si tahw tahT');
	});
});
