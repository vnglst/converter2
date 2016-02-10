//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import SettingsInput from './SettingsInput.jsx';

export default (props) => (
  <div className="well">
    <div className="row">
      <div className="col-sm-6">
      <SettingsInput {...props} _changeSetting={props._changeCharsPerLine} priceStr={props.charsPerLine} priceLabel={charsPerLine} />
      <SettingsInput {...props} _changeSetting={props._changeCharsPerPage} priceStr={props.charsPerPage} priceLabel={charsPerPage}/>
      </div>
      <div className="col-sm-6">
      <SettingsInput {...props} _changeSetting={props._changeWordsPerDay} priceStr={props.wordsPerDay} priceLabel="Words/day"/>
      <SettingsInput {...props} _changeSetting={props._changeHoursPerDay} priceStr={props.hoursPerDay} priceLabel="Hours/day"/>
      </div>
    </div>
    <p><sup>*</sup> Including spaces and special characters/numbers.</p>
  </div>
)

const charsPerLine = <span>Chars/line<sup>*</sup></span>;
const charsPerPage = <span>Chars/page<sup>*</sup></span>;
