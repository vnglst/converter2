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
// getHourPriceRangeString
//
describe('converterUtils: getHourPriceRangeString("Dutch", 0.20)', () => {
  let priceRangeString = converterUtils.getHourPriceRangeString('Dutch', 0.20);

  it('Should return a string', function() {
    expect(priceRangeString).to.be.a('string');
    });

  it('It should contain a € sign', function() {
    expect(priceRangeString).to.contain('€');
  });

  it('Equal to € 40 - € 50', function() {
    expect(priceRangeString).to.equal('€ 40 - € 50');
  });
});
