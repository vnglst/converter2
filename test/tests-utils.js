//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as utils from '../components/App/utils/utils.js';

//
// priceToEuroString TEST CASE 1
//
describe('utils: priceToEuroString(1.209)', () => {
	let price = utils.priceToEuroString(1.209);
	it('Should return a string containing a € sign and 1.21 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('1.21');
	});
});

//
// priceToEuroString TEST CASE 2
//
describe('utils: priceToEuroString([0.209, 0.035, 0.099])', () => {
	let price = utils.priceToEuroString([0.209, 0.035, 0.099]);
	it('Should return a string containing a - and 0.10 and 0.21 as a numbers', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('-');
		expect(price).to.contain('0.04');
		expect(price).to.contain('0.21');
	});
});

//
// priceToEuroString TEST CASE 3
//
describe('utils: priceToEuroString([0.999, 1.001, 0.99998])', () => {
	let price = utils.priceToEuroString([0.999, 1.001, 0.99998]);
	it('Should return a string containing a € sign and 1.00 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('1.00');
	});
  it('Should not contain a -', function () {
    expect(price).to.not.contain('-');
  });
});
