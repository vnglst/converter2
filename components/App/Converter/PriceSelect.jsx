//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../utils/utils.js';

export default class PriceSelect extends React.Component {
  render() {
    const priceOptions = this.props.priceOptions;
    const priceLabel = this.props.priceLabel
    const currentPrice = this.props.currentPrice;
    return (
      <div className="form-group">
        <label className="col-sm-3 control-label" htmlFor="priceSelect">
          {priceLabel}
        </label>
        <div className="col-sm-9">
          <select
            value={currentPrice}
            onChange={this._handleChange}
            className="form-control"
            ref="price"
            id="priceSelect">
            {priceOptions.map(this._renderOption)}
          </select>
        </div>
      </div>
    )
  }
  _handleChange = () => {
    const price = this.refs.price.value;
    this.props.onPriceChange(price);
  }
  _renderOption = (priceOption, i) => {
    return (
      <option key={i} value={priceOption} >
        {utils.priceToEuroString(priceOption)}
      </option>
    )
  }
}
