import unsortedData from './languageData.js';

// Sorts array alphabetically on name property
let sortLangData = function () {
	let sortFunction = function (a, b) {
		let nameA = a.name;
		let nameB = b.name;
		//sort string ascending
		if (nameA < nameB) return -1
		if (nameA > nameB) return 1
		return 0 //default return value (no sorting)
	};
	return unsortedData.sort(sortFunction);
}

export default class {
	constructor() {
		this.langData = sortLangData();
	}

	getAllLangData() {
		return this.langData;
	}

	// Return data for specific language depending on options
	getStats(langName) {
    const langData = this.langData;
    const langIndex = langData.findIndex((lang) => lang.name === langName);
  	const lang = langData[langIndex];
  	return lang.stats;
	}
}
