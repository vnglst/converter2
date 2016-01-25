//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import {
	describe, it
}
from 'mocha';
import {
	expect
}
from 'chai';
import * as converterUtils from '../components/App/utils/converterUtils.js';


//
// priceToEuroString TEST CASE 1
//
describe('converterUtils: priceToEuroString(1.209)', () => {
	let price = converterUtils.priceToEuroString(1.209);
	it('Should return a string containing a € sign and 1.21 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('1.21');
	});
});

//
// priceToEuroString TEST CASE 2
//
describe('converterUtils: priceToEuroString([0.209, 0.035, 0.099])', () => {
	let price = converterUtils.priceToEuroString([0.209, 0.035, 0.099]);
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
describe('converterUtils: priceToEuroString([0.999, 1.001, 0.99998])', () => {
	let price = converterUtils.priceToEuroString([0.999, 1.001, 0.99998]);
	it('Should return a string containing a € sign and 1.00 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('1.00');
	});
  it('Should not contain a -', function () {
    expect(price).to.not.contain('-');
  });
});

//
// convertFromLinePrices
//
describe('converterUtils: convertFromLinePrices', () => {
	let prices = converterUtils.convertFromLinePrices({
		langName: 'Dutch',
		linePrice: 1.25,
		charsPerPage: 1500,
		charsPerLine: 55,
		wordsPerHour: 250
	});

	it('Should return a object', function () {
		expect(prices).to.be.a('object');
	});

	it('Checking charsPrice test value', function () {
		expect(prices.charsPrice).to.equal('€ 0.02');
	});

	it('Checking pagePrice test value', function () {
		expect(prices.pagePrice).to.equal('€ 34.09');
	});

	it('Checking wordPrice test value', function () {
		expect(prices.wordPrice).to.equal('€ 0.14 - € 0.15');
	});

	it('Checking hourPrice test value', function () {
		expect(prices.hourPrice).to.equal('€ 37.08');
	});
});

//
// convertFromWordPrices
//
describe('converterUtils: convertFromWordPrices', () => {
	let prices = converterUtils.convertFromWordPrices({
		langName: 'Dutch',
		wordPrice: 0.20,
		charsPerPage: 1500,
		charsPerLine: 55,
		wordsPerHour: 250
	});

	it('Should return a object', function () {
		expect(prices).to.be.a('object');
	});

	it('Checking charsPrice test value', function () {
		expect(prices.charsPrice).to.equal('€ 0.03');
	});

	it('Checking pagePrice test value', function () {
		expect(prices.pagePrice).to.equal('€ 46.01');
	});

	it('Checking linePrice test value', function () {
		expect(prices.linePrice).to.equal('€ 1.62 - € 1.77');
	});

	it('Checking hourPrice test value', function () {
		expect(prices.hourPrice).to.equal('€ 50.00');
	});
});
