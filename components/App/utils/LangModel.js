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

const langData = sortLangData();

// Returns sorted langData
let getAllLangData = function() {
  return langData;
}

// Return data for specific language depending on options
let getStats = function(langName) {
  const langIndex = langData.findIndex((lang) => lang.name === langName);
  const lang = langData[langIndex];
  return lang.stats;
}

export default {
  getAllLangData: getAllLangData,
  getStats: getStats
}
