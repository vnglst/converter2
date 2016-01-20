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
          [address removed]<br />
          [address removed]<br />
          The Netherlands</p>
          <p><strong>Tel:</strong> [phone removed]<br />
          <strong>Email:</strong> [email removed]<br />
          <strong>VAT number:</strong> [VAT removed]
        </p>
        <h2>External links:</h2>
        <p>
          Despite regular and diligent checking, I accept no responsibility for the content of direct or indirect external links. The operators of these sites are solely responsible for their content.
        </p>
      </div>
    );
  }
}
