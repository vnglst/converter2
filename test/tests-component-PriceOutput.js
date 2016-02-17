//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import PriceOutput from '../components/App/Converter/PriceOutput.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

describe('Testing PriceOutput component', () => {

 const renderer = TestUtils.createRenderer();
 renderer.render(<PriceOutput priceStr="€ 0.20" priceLabel="Per word" />);
 const output = renderer.getRenderOutput();

 it('should contain a div', () => {
  expect(output.type).to.equal('div');
 });

 it('with a className form-group', () => {
  expect(output.props.className).to.equal('form-group');
 });

 console.log(output);

});
