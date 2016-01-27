import LangModel from './LangModel.js';

//
// GENERAL HELPER FUNCTIONS & VARIABLES
//

let languageData = LangModel.getAllLangData();

// wordPrice -> linePrice
let calculateWordPrice = function (linePrice, charsPerWord) {
	const pricePerChar = linePrice / 55;
	const wordPrice = charsPerWord * pricePerChar;
	return wordPrice;
}

// linePrice -> wordPrice
let calculateLinePrice = function (wordPrice, charsPerWord) {
	const pricePerChar = wordPrice / charsPerWord;
	const linePrice = pricePerChar * 55;
	return linePrice;
}

// Rounds price to 2 decimals and adds euro sign
export function priceToEuroString (price) {
	// if price is an array, return price range string
	if (Array.isArray(price)) return getPriceString(price);
	// else add euro sign and return
	let floatingPrice = parseFloat(price);
	return '€ ' + floatingPrice.toFixed(2);
}

// Converts array with prices to price range string
let getPriceString = function (prices) {
	const maxPrice = Math.max.apply(Math, prices);
	const minPrice = Math.min.apply(Math, prices);
	return (maxPrice.toFixed(2) === minPrice.toFixed(2)) ? priceToEuroString(minPrice) : priceToEuroString(minPrice) + ' - ' + priceToEuroString(maxPrice);
};

//
// CONVERT FROM LINEPRICES
//

let getAverageCharsPerWord = function(langName){
	const stats = LangModel.getStats(langName);
	let charsArr = [];
	// Loop through all charPerWord values
	stats.map(function (stats) {
		const charsPerWord = stats.charsPerWord;
		if (charsPerWord !== 0) {
			charsArr.push(charsPerWord);
		}
	})
	return average(charsArr);
}

// Calculates word prices based on language and linePrice, return an array of prices
let calculateWordPrices = function (langName, linePrice) {
	const stats = LangModel.getStats(langName);
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

export function convertFromLinePrices(options) {
	// Options
	const langName = options.langName;
	const linePrice = options.linePrice;
	const charsPerPage = options.charsPerPage || 1500;
	const charsPerLine = options.charsPerLine || 55;
	const wordsPerHour = options.wordsPerHour || 250;

	// Conversions
	const charsPrice = linePrice / charsPerLine;
	const pagePrice = charsPrice * charsPerPage;
	const wordPrice = calculateWordPrices(langName, linePrice);
	const charsPerWord = getAverageCharsPerWord(langName);
	const charsPerHour = wordsPerHour * charsPerWord;
	const hourPrice = charsPerHour * charsPrice;

	// Return object
	return {
		linePrice: linePrice,
		charsPrice: priceToEuroString(charsPrice),
		pagePrice: priceToEuroString(pagePrice),
		wordPrice: priceToEuroString(wordPrice),
		hourPrice: priceToEuroString(hourPrice)
	}
}

//
// CONVERT FROM WORDPRICES
//

let average = function(arr) {
	var total = arr.reduce(function(a, b) {
  return a + b;
	});
	return total / arr.length;
}

// Calculates word prices based on language and wordPrice returns an array of prices
let calculateLinePrices = function (langName, wordPrice) {
	const stats = LangModel.getStats(langName);
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

export function convertFromWordPrices(options) {
	// Options
	const langName = options.langName;
	const wordPrice = options.wordPrice;
	const charsPerPage = options.charsPerPage || 1500;
	const charsPerLine = options.charsPerLine || 55;
	const wordsPerHour = options.wordsPerHour || 250;

	// Conversions
	const linePrice = calculateLinePrices(langName, wordPrice);
	const charsPrice = average(linePrice) / 55;
	const pagePrice = charsPrice * charsPerPage;
	const hourPrice = wordsPerHour * wordPrice;

	// Return object
	return {
		wordPrice: wordPrice,
		pagePrice: priceToEuroString(pagePrice),
		charsPrice: priceToEuroString(charsPrice),
		linePrice: priceToEuroString(linePrice),
		hourPrice: priceToEuroString(hourPrice)
	}
}

//
// DETAILSBOX
//

//
export function getWordPriceString(linePrice, charsPerWord) {
	const wordPrice = calculateWordPrice(linePrice, charsPerWord);
	const euroPriceString = priceToEuroString(wordPrice);
	return euroPriceString;
}

//
export function getLinePriceString(wordPrice, charsPerWord) {
	const linePrice = calculateLinePrice(wordPrice, charsPerWord);
	const euroPriceString = priceToEuroString(linePrice);
	return euroPriceString;
}

//
// PRICEOPTIONS
//

// Generates a list of price options for select input field
export function generatePriceOptions(start, max, steps) {
	let priceOptions = [];
	for (let priceOption = start; priceOption <= max; priceOption += steps)
		priceOptions.push(priceOption.toFixed(2));
	return priceOptions;
}
