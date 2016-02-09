//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import InputBox from '../InputBox.jsx';
import SettingsInput from './SettingsInput.jsx';

export default (props) => (
  <InputBox>
      <SettingsInput {...props} _changeSetting={props._changeCharsPerLine} priceStr={props.charsPerLine} priceLabel="Chars per line"/>
      <SettingsInput {...props} _changeSetting={props._changeCharsPerPage} priceStr={props.charsPerPage} priceLabel="Chars per page"/>
      <SettingsInput {...props} _changeSetting={props._changeWordsPerDay} priceStr={props.wordsPerDay} priceLabel="Words per day"/>
      <SettingsInput {...props} _changeSetting={props._changeHoursPerDay} priceStr={props.hoursPerDay} priceLabel="Hours per day"/>
  </InputBox>
)
