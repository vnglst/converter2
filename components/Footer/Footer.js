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
        The Translator's Converter is released under <a href="https://github.com/vnglst/converter2/blob/master/LICENSE">MIT License</a>. This website is made by <a href="http://vangilst.de/">Koen van Gilst</a> (<a href="https://twitter.com/vnglst">@vnglst</a>) and the source code is <a href="https://github.com/vnglst/converter2">available on Github</a>. <a href="/disclaimer">Disclaimer</a>. 
      </p>
    </div>
  );
}

export default Footer;
