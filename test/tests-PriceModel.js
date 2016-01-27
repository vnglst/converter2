//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import PriceModel from '../components/App/utils/PriceModel.js';

describe('Create a new PriceModel("German")', () => {
  const priceModelGerman = new PriceModel('German');
  it('Should be an object', function () {
    expect(priceModelGerman).to.be.a('object');
  });

  describe('Set the charPrice to 0.04, get the wordPriceRange', () => {
    priceModelGerman.setCharPrice(0.04);
    let wordPriceRange = priceModelGerman.getWordPriceRange();
    it('Should return a string containing a € and a - sign and 0.29 as a number', function () {
      expect(wordPriceRange).to.be.a('string');
      expect(wordPriceRange).to.contain('€');
      expect(wordPriceRange).to.contain('-');
      expect(wordPriceRange).to.contain('0.29');
    });
  });

  describe('Set the linePrice to 1.25', () => {
    priceModelGerman.setLinePrice(1.25);

    it('Checking wordPriceRange = € 0.16 - € 0.18', function () {
      expect(priceModelGerman.getWordPriceRange()).to.equal('€ 0.16 - € 0.18');
    });

    let wordPrice = priceModelGerman.getWordPrice();
    it('getWordPrice should return a string containing a € and 0.17 as a number', function () {
      expect(wordPrice).to.be.a('string');
      expect(wordPrice).to.contain('€');
      expect(wordPrice).to.contain('0.17');
    });

    it('Checking pagePrice = € 34.09', function () {
      expect(priceModelGerman.getPagePrice()).to.equal('€ 34.09');
    });

    it('Checking charsPrice = € 0.02', function () {
      expect(priceModelGerman.getCharPrice()).to.equal('€ 0.02');
    });

    it('Checking hourPrice = € 42.42', function () {
      expect(priceModelGerman.getHourPrice()).to.equal('€ 42.42');
    });
  });
});

describe('Create a new PriceModel("Dutch")', () => {
  const priceModelDutch = new PriceModel('Dutch');
  describe('Set the wordPrice to 0.20', () => {
    priceModelDutch.setWordPrice(0.20);

    it('Checking charsPrice = € 0.03', function () {
  		expect(priceModelDutch.getCharPrice()).to.equal('€ 0.03');
  	});

  	it('Checking pagePrice = € 46.01', function () {
  		expect(priceModelDutch.getPagePrice()).to.equal('€ 46.01');
  	});

  	it('Checking linePrice = € 1.62 - € 1.77', function () {
  		expect(priceModelDutch.getLinePriceRange()).to.equal('€ 1.62 - € 1.77');
  	});

  	it('Checking hourPrice = € 50.00', function () {
  		expect(priceModelDutch.getHourPrice()).to.equal('€ 50.00');
  	});
  });
});
