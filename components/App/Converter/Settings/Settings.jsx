//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import SettingsInput from './SettingsInput.jsx';

const Settings = ({
		_changeCharsPerLine,
		charsPerLine,
		_changeCharsPerPage,
		charsPerPage,
		_changeWordsPerDay,
		wordsPerDay,
		_changeHoursPerDay,
		hoursPerDay
}) => {
		const charsPerLineLabel = <span>Chars/line<sup>*</sup></span>;
		const charsPerPageLabel = <span>Chars/page<sup>*</sup></span>;
		return (
				<div className="well">
						<div className="row">
								<div className="col-sm-6">
										<SettingsInput _changeSetting={_changeCharsPerLine} priceStr={charsPerLine} priceLabel={charsPerLineLabel}/>
										<SettingsInput _changeSetting={_changeCharsPerPage} priceStr={charsPerPage} priceLabel={charsPerPageLabel}/>
								</div>
								<div className="col-sm-6">
										<SettingsInput _changeSetting={_changeWordsPerDay} priceStr={wordsPerDay} priceLabel="Words/day"/>
										<SettingsInput _changeSetting={_changeHoursPerDay} priceStr={hoursPerDay} priceLabel="Hours/day"/>
								</div>
						</div>
						<p>
								<sup>*</sup>
								Including spaces and special characters/numbers.
						</p>
				</div>
		)
}

Settings.propTypes = {
		_changeCharsPerLine: React.PropTypes.func.isRequired,
		charsPerLine: React.PropTypes.number.isRequired,
		_changeCharsPerPage: React.PropTypes.func.isRequired,
		charsPerPage: React.PropTypes.number.isRequired,
		_changeWordsPerDay: React.PropTypes.func.isRequired,
		wordsPerDay: React.PropTypes.number.isRequired,
		_changeHoursPerDay: React.PropTypes.func.isRequired,
		hoursPerDay: React.PropTypes.number.isRequired
}

export default Settings;
