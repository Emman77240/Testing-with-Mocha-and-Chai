const mocha = require('mocha');
const chai = require('chai');

const sumOfNumRange = require('../sumOfNumRange');

const expect = chai.expect;

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