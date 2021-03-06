//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('routes-loader', () => {
  it('Should load a list of routes', function test(done) {
    this.cacheable = () => {};
    this.async = () => (err, result) => {
      expect(err).to.be.null;
      expect(result).to.not.to.be.empty.and.have.all.keys('/', '/404', '/500');
      done();
    };

    require('../tools/lib/routes-loader').call(this, 'const routes = {};');
  });
});
