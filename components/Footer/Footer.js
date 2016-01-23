//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <div className="Footer">
      <p>
        The Word to Line Rates Converter is released under <a href="https://creativecommons.org/licenses/by/4.0/deed.nl">CC license</a>. The Converter is made by <a href="http://vangilst.de/">Koen van Gilst</a> and the source code is <a href="https://github.com/vnglst/converter2">available on Github</a>.
      </p>
    </div>
  );
}

export default Footer;
