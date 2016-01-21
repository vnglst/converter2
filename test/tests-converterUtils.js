//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as converterUtils from '../components/App/utils/converterUtils.js';

describe('converterUtils: getLinePriceRangeString("Dutch", 0.20)', () => {
  let priceRangString = converterUtils.getLinePriceRangeString('Dutch', 0.20);

  it('Should return a string', function() {
    expect(priceRangString).to.be.a('string');
    });

  it('It should contain a € sign', function() {
    expect(priceRangString).to.contain('€');
  });

  it('Equal to € 1.62 - € 1.77', function() {
    expect(priceRangString).to.equal('€ 1.62 - € 1.77');
  });

});
