//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import converterUtils from '../../utils/converterUtils';

export default class PriceSelect extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const priceOptions = this.getPriceOptions();
    const priceLabel = 'Rate per '+this.props.fromUnit;
    const currentPrice = this.props.currentPrice;
    return (
      <div className="form-group">
        <label className="col-sm-3 control-label" htmlFor="priceSelect">
          {priceLabel}
        </label>
        <div className="col-sm-9">
          <select
            value={currentPrice}
            onChange={this._changePrice}
            className="form-control"
            ref="price"
            id="priceSelect">
            {priceOptions.map(this._renderOption)}
          </select>
        </div>
      </div>
    )
  }
  getPriceOptions = () => {
    const fromUnit = this.props.fromUnit;
    switch (fromUnit){
      case 'word':
        return converterUtils.generatePriceOptions(0.10, 0.45, 0.01);
        break;
      case 'line':
        return converterUtils.generatePriceOptions(0.90, 2.5, 0.05);
        break;
    }
  }
  _changePrice = () => {
    const price = this.refs.price.value;
    this.props.onPriceChange(price);
  }
  _renderOption = (priceOption, i) => {
    return (
      <option key={i} value={priceOption} >
        {converterUtils.priceToEuroString(priceOption)}
      </option>
    )
  }
}
