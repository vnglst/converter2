//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../PriceOutput.jsx';

export default class MoreRatesBox extends React.Component {
  render() {
		const charPriceStr = this.props.priceOutput.charPriceStr;
		const pagePriceStr = this.props.priceOutput.pagePriceStr;
		const hourPriceStr = this.props.priceOutput.hourPriceStr;
		const dayPriceStr = this.props.priceOutput.dayPriceStr;
    return (
      <form className="form-horizontal">
        <PriceOutput {...this.props} priceStr={charPriceStr} priceLabel="Per character" />
        <PriceOutput {...this.props} priceStr={pagePriceStr} priceLabel="Per page" />
        <PriceOutput {...this.props} priceStr={hourPriceStr} priceLabel="Per hour" />
        <PriceOutput {...this.props} priceStr={dayPriceStr} priceLabel="Per day" />
      </form>
    )
  }
}
