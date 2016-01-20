//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="Text-Content">
        <h1>Legal notice</h1>
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
