import unsortedData from './languageData.js';

// Sorts array alphabetically on name property
let sortLangData = function (unsortedData) {
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
    this.langData = sortLangData(unsortedData);
  }

  get data() {
    return this.langData;
  }
}
