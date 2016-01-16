//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import Fonts from '../Fonts';
import config from '../../config';

const bootstrapCND = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';

function Html({ title, description, body, debug }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={bootstrapCND} media="bogus-real-load-below"/>
        <script async src={'/app.js?' + new Date().getTime()} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
        <GoogleAnalytics />
        <Fonts />
        <link rel="stylesheet" href={bootstrapCND} />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;
