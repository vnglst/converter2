//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

const fontsToLoad = [
  'Droid+Serif:400,700,400italic',
  'Source Sans Pro:400,600,700,900,400italic'
];

const fontScript = { __html:
  `WebFont.load({ google: { families: [` +
  `'Droid+Serif:400,700,400italic',` +
  `'Source Sans Pro:400,600,700,900,400italic'` + 
  `] } })`,
};

function Fonts() {
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
      <script dangerouslySetInnerHTML={fontScript} />;
    </div>
  );
}

export default Fonts;
