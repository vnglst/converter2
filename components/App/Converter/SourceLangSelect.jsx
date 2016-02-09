//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import LangSelect from './LangSelect.jsx';

export default (props) => (
  <LangSelect {...props} onLangChange={props._changeSourceLang} langLabel="Source language" currentLang={props.sourceLang} />
);
