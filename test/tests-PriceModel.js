//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import PriceModel from '../components/App/utils/PriceModel.js';

describe('Create a new PriceModel: German, 1.25 linePrice', () => {
  const priceModelGerman = new PriceModel({
    sourceLang: 'German',
    linePrice: 1.25
  });

  it('Should be an object', function () {
    expect(priceModelGerman).to.be.a('object');
  });

  it('Checking wordPrice = € 0.17', function () {
		expect(priceModelGerman.getWordPriceStr()).to.equal('€ 0.17');
	});

  it('Checking getWordPrice = 0.17', function () {
    expect(priceModelGerman.getWordPrice()).to.equal((0.17).toFixed(2));
  });

  it('Checking charPrice = € 0.02', function () {
    expect(priceModelGerman.getCharPriceStr()).to.equal('€ 0.02');
  });

  it('Checking hourPrice = € 48.48', function () {
    expect(priceModelGerman.getHourPriceStr()).to.equal('€ 48.48');
  });

  it('Checking pagePrice = € 34.09', function () {
    expect(priceModelGerman.getPagePriceStr()).to.equal('€ 34.09');
  });

});

describe('Create a new PriceModel: Dutch, 0.20 wordPrice', () => {
  const priceModelDutch = new PriceModel({
    sourceLang: 'Dutch',
    wordPrice: 0.20
  });

  it('Checking charsPrice = € 0.03', function () {
		expect(priceModelDutch.getCharPriceStr()).to.equal('€ 0.03');
	});

	it('Checking linePrice = € 1.69', function () {
		expect(priceModelDutch.getLinePriceStr()).to.equal('€ 1.69');
	});

  it('Checking getWordPrice = € 0.20', function () {
    expect(priceModelDutch.getWordPrice()).to.equal((0.20).toFixed(2));
  });

  it('Checking pagePrice = € 46.01', function () {
  	expect(priceModelDutch.getPagePriceStr()).to.equal('€ 46.01');
  });

	it('Checking hourPrice = € 57.14', function () {
		expect(priceModelDutch.getHourPriceStr()).to.equal('€ 57.14');
	});

});

describe('Set wordPrice to 0.20 and sourceLang to German', () => {
  const priceModel = new PriceModel({
    sourceLang: 'Dutch',
    wordPrice: 0.20
  });

  priceModel.setSourceLang('German');

  it('Should not change the wordPrice after changing sourceLang to German', () => {
    expect(priceModel.getWordPriceStr()).to.equal('€ 0.20');
  });

  it('Should not change the linePrice after changing sourceLang to German', () => {
    expect(priceModel.getLinePriceStr()).to.equal('€ 1.69');
  });
});
