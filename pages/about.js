//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="Content">
        <div className="Text">
          <h1>About this website</h1>
          <p>I made this website as a weekend/side project and I'd love to get feedback from fellow translators. What features are still missing? I'm also interested in language conversion data for languages that I don't speak (my languages are Dutch, German & English). I am specifically looking for the number of characters per word (including spaces) for different kinds of texts (e.g. legal, technical, financial and marketing texts).</p>
          <p>Feel free to contact me on <a href="https://twitter.com/vnglst">Twitter</a> or via <a href="http://vangilst.de/en/contact/">email</a>.</p>
          <h2>Current features</h2>
          <ul>
            <li>Calculate line rates based on word rates</li>
            <li>Calculate word rates based on line rates</li>
            <li>Show/hide detailed assumptions</li>
            <li>Conversion metrics based on Wolfram Alpha (all languages)</li>
            <li>Conversion metrics based on EU corpus (all EU languages)</li>
            <li>Conversion metrics for different kinds of source texts for German</li>
          </ul>
          <h2>Future features</h2>
          <ul>
            <li className="strikethrough">Show price ranges instead of one price</li>
            <li className="strikethrough">Add more source languages</li>
            <li className="strikethrough">Add short description to the footer</li>
            <li>Add more rates (per page, per hour & per day)</li>
            <li>Add more averages for different kinds of texts (for English & Dutch)</li>
            <li>Add more averages French, Spanish and Italian</li>
            <li>Add target languages</li>
            <li className="strikethrough">Make source code available on Github</li>
          </ul>
        </div>
      </div>
    );
  }
}
