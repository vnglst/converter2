//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import LangDataModel from '../components/App/utils/LangDataModel.js';

describe('LangDataModel: langModel.data', () => {
	const langDataModel = new LangDataModel();
  const data = langDataModel.data;
  const lastLanguage = data.length - 1;
	it('Should be an array', function () {
		expect(data).to.be.a('array');
	});
  it('First language should be Bulgarian', function () {
    expect(data[0].name).to.be.a('string');
    expect(data[0].name).to.contain('Bulgarian');
  });
  it('Last language in array should be Swedish', function () {
    expect(data[lastLanguage].name).to.be.a('string');
    expect(data[lastLanguage].name).to.contain('Swedish');
  });
});
