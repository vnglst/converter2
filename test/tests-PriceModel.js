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

  it('Checking charPrice = € 0.02', function () {
    expect(priceModelGerman.getCharPriceStr()).to.equal('€ 0.02');
  });

  // it('Checking hourPrice = € 42.42', function () {
  //   expect(priceModelGerman.getHourPrice()).to.equal('€ 42.42');
  // });

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

  it('Checking pagePrice = € 46.01', function () {
  	expect(priceModelDutch.getPagePriceStr()).to.equal('€ 46.01');
  });

	// it('Checking hourPrice = € 50.00', function () {
	// 	expect(priceModelDutch.getHourPrice()).to.equal('€ 50.00');
	// });
});
