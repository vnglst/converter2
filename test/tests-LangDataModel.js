//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';
import LangModel from '../components/App/utils/LangModel.js';

describe('LangModel: langModel.langData', () => {
  const langData = LangModel.langData;
  const lastLanguage = langData.length - 1;
  it('Should be an array', function () {
		expect(langData).to.be.a('array');
	});
  it('First language should be Bulgarian', function () {
    expect(langData[0].name).to.be.a('string');
    expect(langData[0].name).to.contain('Bulgarian');
  });
  it('Last language in array should be Swedish', function () {
    expect(langData[lastLanguage].name).to.be.a('string');
    expect(langData[lastLanguage].name).to.contain('Swedish');
  });
});

describe('LangModel: langModel.getStats for German', () => {
  const stats = LangModel.getStats('German');
  it('Should be an array', function () {
    expect(stats).to.be.a('array');
    expect(stats).to.have.length(6);
  });
  it('First source should be Wolfram', function () {
    expect(stats[0].source).to.contain('Wolfram');
  });
  it('First charsPerWord should be 7.26', function () {
    expect(stats[0].charsPerWord).to.equal(7.26);
  });
});
