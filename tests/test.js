const mocha = require('mocha');
const chai = require('chai');

const joinWordsTest = require('../joinWords');
const strReverse = require('../strReverse');
const sumOfNumRange = require('../sumOfNumRange');

const expect = chai.expect;

describe('It tests a function that removes spaces between words and joins the words with hyphens', () => {
    it('Returns a string of words seperated by hyphens', () => {
        let string1 = joinWordsTest('Who is your daddy');
        let string2 = joinWordsTest('Winter has come and gone');

        expect(string1).to.equal('who-is-your-daddy');
        expect(string2).to.equal('winter-has-come-and-gone');
    })
})

describe('Test for sum of a range of numbers', () => {
    it('Receives an input array containing a number range to the nearest whole number', () => {
        let array1 = sumOfNumRange([1, 4]);
        let array2 = sumOfNumRange([4, 4]);
        let array3 = sumOfNumRange([2.5, 9]);

        expect(array1).to.equal(10);
        expect(array2).to.equal(4);
        expect(array3).to.equal(44);
    })
})

describe('Reverse String Test', () => {
	it('Checks if the strings are reversed', () => {
		let str1 = strReverse('You smell nice!');
		let str2 = strReverse('That what is dead may never die!');

		expect(str1).to.equal('!ecin llems uoY');
		expect(str2).to.equal('!eid reven yam daed si tahw tahT');
	});
});
