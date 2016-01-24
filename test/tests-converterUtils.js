//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as converterUtils from '../components/App/utils/converterUtils.js';

//
// getLinePriceRangeString
//
describe('converterUtils: getLinePriceRangeString("Dutch", 0.20)', () => {
  let priceRangeString = converterUtils.getLinePriceRangeString('Dutch', 0.20);

  it('Should return a string', function() {
    expect(priceRangeString).to.be.a('string');
    });

  it('It should contain a € sign', function() {
    expect(priceRangeString).to.contain('€');
  });

  it('Equal to € 1.62 - € 1.77', function() {
    expect(priceRangeString).to.equal('€ 1.62 - € 1.77');
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
    linesPerHour: 30
  });

  it('Should return a object', function() {
    expect(prices).to.be.a('object');
    });

  it('Checking pagePrice test value', function() {
    expect(prices.pagePrice).to.equal('€ 34.09');
    });

  it('Checking wordPrice test value', function() {
    expect(prices.wordPrice).to.equal('€ 0.14 - € 0.15');
    });

  it('Checking hourPrice test value', function() {
    expect(prices.hourPrice).to.equal('€ 37.50');
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
    wordsPerHour: 250
  });

  it('Should return a object', function() {
    expect(prices).to.be.a('object');
    });

  // it('Checking pagePrice test value', function() {
  //   expect(prices.pagePrice).to.equal('€ 34.09');
  //   });

  it('Checking linePrice test value', function() {
    expect(prices.linePrice).to.equal('€ 1.62 - € 1.77');
    });

  it('Checking hourPrice test value', function() {
    expect(prices.hourPrice).to.equal('€ 50.00');
    });
});
