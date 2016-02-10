//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import calcPrices from '../components/App/utils/calcPrices.js';

describe('Test Prices function. Input: { langName: German, linePrice: 1.25 }', () => {
 const input = {
  sourceLang: 'German',
  linePrice: 1.25
 }
 const output = calcPrices(input);

  it('Should be an object', function () {
    expect(output).to.be.a('object');
  });

  it('Should have a linePriceStr', function () {
    expect(output.linePriceStr).to.be.equal('€ 1.25');
  });

  it('Should have a wordPriceStr', function () {
    expect(output.wordPriceStr).to.be.equal('€ 0.17');
  });

  it('Should have a charPriceStr', function () {
    expect(output.charPriceStr).to.be.equal('€ 0.02');
  });

  it('Should have a hourPriceStr', function () {
    expect(output.hourPriceStr).to.be.equal('€ 48.48');
  });

  it('Should have a pagePriceStr', function () {
    expect(output.pagePriceStr).to.be.equal('€ 34.09');
  });

});

describe('Test Prices function. Input: { langName: Dutch, wordPrice: 0.20 }', () => {
 const input = {
  sourceLang: 'Dutch',
  wordPrice: 0.20
 }
 const output = calcPrices(input);

  it('Should have a linePriceStr € 1.69 ', function () {
    expect(output.linePriceStr).to.be.equal('€ 1.69');
  });

});

describe('Test Prices function. Input: { langName: German, linePrice: 1.55 }', () => {
 const input = {
  sourceLang: 'German',
  linePrice: 1.55
 }
 const output = calcPrices(input);

  it('Should have a wordPriceStr', function () {
    expect(output.wordPriceStr).to.be.equal('€ 0.21');
  });

  it('Should have a charPriceStr', function () {
    expect(output.charPriceStr).to.be.equal('€ 0.03');
  });

  it('Should have a hourPriceStr', function () {
    expect(output.hourPriceStr).to.be.equal('€ 60.12');
  });

  it('Should have a pagePriceStr', function () {
    expect(output.pagePriceStr).to.be.equal('€ 42.27');
  });

  it('Should have a dayPriceStr', function () {
    expect(output.dayPriceStr).to.be.equal('€ 420.85');
  });

});
