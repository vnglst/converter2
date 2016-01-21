import languageData from './languageData.js';

// Generates a list of price options for select input field
var generatePriceOptions = function(start, max, steps) {
	let priceOptions = [];
	for (let priceOption = start; priceOption <= max; priceOption += steps)
		priceOptions.push(priceOption.toFixed(2));
	return priceOptions;
}

// Returns languageData sorted alphabetically on language name
var getLanguageData = function () {
	const languages = getSortedLanguageData();
	return languages;
}

// Sorts languageData array on language name
// Returns sorted array
var getSortedLanguageData = function () {
	let sortFunction = function (a, b) {
		let nameA = a.name;
		let nameB = b.name;
		//sort string ascending
		if (nameA < nameB) return -1
		if (nameA > nameB) return 1
		return 0 //default return value (no sorting)
	};
	return languageData.sort(sortFunction);
}

var priceToEuroString = function (price) {
	let floatingPrice = parseFloat(price);
	return '€ ' + floatingPrice.toFixed(2);
}

//
// TO LINESPRICES
//

//
var getLinePriceRangeString = function (langName, wordPrice) {
	const linePrices = calculateLinePrices(langName, wordPrice);
	return getPriceString(linePrices);
}

// Calculates word prices based on language and wordPrice
// Returns an array of prices
var calculateLinePrices = function (langName, wordPrice) {
	const stats = getStats(langName);
	let linePriceArr = [];
	let linePrice;
	// Loop through all charPerWord values
	stats.map(function (stats) {
		const charsPerWord = stats.charsPerWord;
		if (charsPerWord !== 0) {
			linePrice = calculateLinePrice(wordPrice, charsPerWord);
			linePriceArr.push(linePrice);
		}
	})
	return linePriceArr;
}

//
// TO WORD PRICES
//

//
var getWordPriceRangeString = function (langName, linePrice) {
	const wordPrices = calculateWordPrices(langName, linePrice);
	return getPriceString(wordPrices);
}

// Calculates word prices based on language and linePrice
// Returns an array of prices
var calculateWordPrices = function (langName, linePrice) {
	const stats = getStats(langName);
	let wordPriceArr = [];
	let wordPrice;
	// Loop through all charPerWord values
	stats.map(function (stats) {
		const charsPerWord = stats.charsPerWord;
		if (charsPerWord !== 0) {
			wordPrice = calculateWordPrice(linePrice, charsPerWord);
			wordPriceArr.push(wordPrice);
		}
	})
	return wordPriceArr;
}

//
// DETAILSBOX
//

//
var getWordPriceString = function (linePrice, charsPerWord) {
	const wordPrice = calculateWordPrice(linePrice, charsPerWord);
	const euroPriceString = priceToEuroString(wordPrice);
	return euroPriceString;
}

//
var getLinePriceString = function (wordPrice, charsPerWord) {
	const linePrice = calculateLinePrice(wordPrice, charsPerWord);
	const euroPriceString = priceToEuroString(linePrice);
	return euroPriceString;
}

//
var calculateWordsPerLine = function (charsPerWord) {
	return 55 / charsPerWord;
}

//
var calculateWordPrice = function (linePrice, charsPerWord) {
	const wordPrice = linePrice * charsPerWord / 55;
	return wordPrice;
}

//
var calculateLinePrice = function (wordPrice, charsPerWord) {
	const wordsPerLine = calculateWordsPerLine(charsPerWord);
	const linePrice = wordsPerLine * wordPrice;
	return linePrice;
}

// Parameter: langName (string)
// Finds the index in the array for langName
// Returns: the array of chars per word from
// the language object at index
var getStats = function (langName) {
	const language = getLanguage(langName);
	return language.stats;
}

// Parameter: langName (string)
// Finds the index in the array for langName
// Returns: the language object at index
var getLanguage = function (langName) {
	const langIndex = languageData.findIndex((language) => language.name === langName);
	return languageData[langIndex];
}

// Returns a readable string with a price range
// With a max and min value
// Or one single value
var getPriceString = function (prices) {
	const maxPrice = Math.max.apply(Math, prices);
	const minPrice = Math.min.apply(Math, prices);
	return (maxPrice === minPrice) ? priceToEuroString(minPrice) : priceToEuroString(minPrice) + ' - ' + priceToEuroString(maxPrice);
};

// Exported public methods
var converterUtils = {
	generatePriceOptions: generatePriceOptions,
	getLanguageData: getLanguageData,
	priceToEuroString: priceToEuroString,
	getLinePriceRangeString: getLinePriceRangeString,
	getWordPriceRangeString: getWordPriceRangeString,
	getWordPriceString: getWordPriceString,
	getLinePriceString: getLinePriceString,
	calculateWordsPerLine: calculateWordsPerLine,
	getStats: getStats
}

export default converterUtils;
