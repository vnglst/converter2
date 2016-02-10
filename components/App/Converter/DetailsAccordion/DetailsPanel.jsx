//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Table from 'react-bootstrap/lib/Table'
import PriceOutput from '../PriceOutput.jsx';
import LangModel from '../../utils/LangModel';

export default({priceOutput}) => {
    const currentLang = priceOutput.sourceLang;
    const stats = LangModel.getStats(currentLang);
		return (
      <Table fill striped hover>
        <thead>
          <tr>
            <th>Based on</th>
            <th>Chars / word</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(renderRow)}
        </tbody>
      </Table>
		)
}

const renderRow = (data, i) => {
  const source = data.source;
  const charsPerWord = data.charsPerWord;
  return (
    <tr key={i}>
      <td>{source}</td>
      <td>{charsPerWord}</td>
    </tr>
  );
}
