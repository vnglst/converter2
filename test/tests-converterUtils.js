//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as converterUtils from '../components/App/utils/converterUtils.js';

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

  it('Should return a object', function() {
    expect(prices).to.be.a('object');
    });

  it('Checking charsPrice test value', function() {
    expect(prices.charsPrice).to.equal('€ 0.02');
    });

  it('Checking pagePrice test value', function() {
    expect(prices.pagePrice).to.equal('€ 34.09');
    });

  it('Checking wordPrice test value', function() {
    expect(prices.wordPrice).to.equal('€ 0.14 - € 0.15');
    });

  it('Checking hourPrice test value', function() {
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

  it('Should return a object', function() {
    expect(prices).to.be.a('object');
    });

  it('Checking charsPrice test value', function() {
    expect(prices.charsPrice).to.equal('€ 0.03');
    });

  it('Checking pagePrice test value', function() {
    expect(prices.pagePrice).to.equal('€ 46.01');
    });

  it('Checking linePrice test value', function() {
    expect(prices.linePrice).to.equal('€ 1.62 - € 1.77');
    });

  it('Checking hourPrice test value', function() {
    expect(prices.hourPrice).to.equal('€ 50.00');
    });
});
