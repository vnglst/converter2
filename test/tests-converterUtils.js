//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as converterUtils from '../components/App/utils/converterUtils.js';

//
// getWordPriceString (linePrice, charsPerWord)
//
describe('converterUtils: getWordPriceString(1.25, 6.70)', () => {
	let price = converterUtils.getWordPriceString(1.25, 6.70);
	it('Should return a string containing a € sign and 0.15 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('0.15');
	});
});

//
// getLinePriceString (wordPrice, charsPerWord)
//
describe('converterUtils: getLinePriceString(0.15, 6.70)', () => {
	let price = converterUtils.getLinePriceString(0.15, 6.70);
	it('Should return a string containing a € sign and 1.23 as a number', function () {
		expect(price).to.be.a('string');
		expect(price).to.contain('€');
		expect(price).to.contain('1.23');
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

	it('Checking charsPrice = € 0.02', function () {
		expect(prices.charsPrice).to.equal('€ 0.02');
	});

	it('Checking pagePrice = € 34.09', function () {
		expect(prices.pagePrice).to.equal('€ 34.09');
	});

	it('Checking wordPrice = € 0.14 - € 0.15', function () {
		expect(prices.wordPrice).to.equal('€ 0.14 - € 0.15');
	});

	it('Checking hourPrice = € 37.08', function () {
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

	it('Checking charsPrice = € 0.03', function () {
		expect(prices.charsPrice).to.equal('€ 0.03');
	});

	it('Checking pagePrice = € 46.01', function () {
		expect(prices.pagePrice).to.equal('€ 46.01');
	});

	it('Checking linePrice = € 1.62 - € 1.77', function () {
		expect(prices.linePrice).to.equal('€ 1.62 - € 1.77');
	});

	it('Checking hourPrice = € 50.00', function () {
		expect(prices.hourPrice).to.equal('€ 50.00');
	});
});
