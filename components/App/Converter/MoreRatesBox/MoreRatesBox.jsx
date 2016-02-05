//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import PagePriceOutput from './PriceOutput/PagePriceOutput.jsx';
import CharPriceOutput from './PriceOutput/CharPriceOutput.jsx';
import HourPriceOutput from './PriceOutput/HourPriceOutput.jsx';
import DayPriceOutput from './PriceOutput/DayPriceOutput.jsx';

export default class MoreRatesBox extends React.Component {
  render() {
    return (
      <form className="form-horizontal">
        <PagePriceOutput {...this.props}/>
        <CharPriceOutput {...this.props}/>
        <HourPriceOutput {...this.props}/>
        <DayPriceOutput {...this.props}/>
      </form>
    )
  }
}
