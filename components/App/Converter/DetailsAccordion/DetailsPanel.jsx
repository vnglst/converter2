//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table'
import PriceOutput from '../PriceOutput.jsx';

const DetailsPanel = ({sourceLang, LangModel}) => {
		const stats = LangModel.getStats(sourceLang);
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

DetailsPanel.propTypes = {
  priceOutput: React.PropTypes.shape({
    sourceLang: React.PropTypes.string.isRequired,
    LangModel: React.PropTypes.object.isRequired
  })
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

export default DetailsPanel;
