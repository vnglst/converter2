//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="Text-Content">

        <h1>Disclaimer</h1>
        <p>
          This website converts per word to per line rates based (among others) on the language conversion metrics provided by <a href="http://www.wolframalpha.com/input/?i=1000+words+in+English">Wolfram Alpha</a>.
        </p>
        <p>
          The number of characters per word varies greatly per language. Wolfram Alpha calculates these values based on a statistical analysis of general texts and this might be different for texts in other areas. I therefore advise anyone to use this tool with caution.
        </p>

        <p>
          You can verify your own results by using Microsoft Word or a CAT tool (like MemoQ or Trados).
        </p>

        <h2>Responsible for site content:</h2>
        <p>
          Koen van Gilst<br />
          Stieltjesstraat 76<br />
          3514JD Utrecht<br />
          The Netherlands</p>
          <p><strong>Tel:</strong> +31 30 711 6930<br />
          <strong>Email:</strong> converter@vangilst.de<br />
          <strong>VAT number:</strong> NL 189376004 B02
        </p>

        <h2>External links:</h2>
        <p>
          Despite regular and diligent checking, I accept no responsibility for the content of direct or indirect external links. The operators of these sites are solely responsible for their content.
        </p>
      </div>
    );
  }
}
