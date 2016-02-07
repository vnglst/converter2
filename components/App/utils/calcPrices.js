//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import LangModel from './LangModel.js';
import * as utils from './utils.js';

const languageData = LangModel.langData;

// Retrieves the array of characters per word for certain language
const getCharsPerWordArr = function (langName) {
	const stats = LangModel.getStats(langName);
	const charsPerWordArr = stats.map(obj => obj.charsPerWord)
	return charsPerWordArr;
}

// Calculates average wordPrice
const calcWordPrice = function (langName, charPrice) {
	const charsPerWordArr = getCharsPerWordArr(langName);
	const charsPerLine = utils.average(charsPerWordArr);
	const wordPriceArr = charsPerWordArr.map(charsPerWord => charsPerWord * charPrice);
	const wordPrice = utils.average(wordPriceArr);
	return wordPrice;
}

// Calculated average charPrice
const calcCharPrice = function (langName, wordPrice) {
	const charsPerWordArr = getCharsPerWordArr(langName);
	const charPriceArr = charsPerWordArr.map(charsPerWord => wordPrice / charsPerWord);
	const charPrice = utils.average(charPriceArr);
	return charPrice;
}

export default function calcPrices(input) {
	// Defaults
	const charsPerLine = input.charsPerLine || 55;
	const charsPerPage = input.charsPerPage || 1500;
	const wordsPerDay = input.wordsPerDay || 2000;
	const hoursPerDay = input.hoursPerDay || 7;
	const wordsPerHour = input.wordsPerHour || wordsPerDay / hoursPerDay;

	// Options
	const sourceLang = input.sourceLang;
	let charPrice = input.linePrice / charsPerLine || calcCharPrice(sourceLang, input.wordPrice);
	let wordPrice = input.wordPrice || calcWordPrice(sourceLang, charPrice);
	let linePrice = input.linePrice || charPrice * charsPerLine;

	// Calculations
	const pagePrice = charPrice * charsPerPage;
	const hourPrice = wordPrice * wordsPerHour;
	const dayPrice = hourPrice * hoursPerDay;

	// To euro strings
	const linePriceStr = utils.priceToEuroString(linePrice);
	const wordPriceStr = utils.priceToEuroString(wordPrice);
	const charPriceStr = utils.priceToEuroString(charPrice);
	const pagePriceStr = utils.priceToEuroString(pagePrice);
	const hourPriceStr = utils.priceToEuroString(hourPrice);
	const dayPriceStr = utils.priceToEuroString(dayPrice);

	// // Rounding, N.B. toFixed returns a string
	// wordPrice = wordPrice.toFixed(2);
	// linePrice = linePrice.toFixed(2);

	return {
		sourceLang,
		linePrice,
		wordPrice,
		charPrice,
		linePriceStr,
		wordPriceStr,
		charPriceStr,
		pagePriceStr,
		hourPriceStr,
		dayPriceStr,
		charsPerLine,
		charsPerPage,
		wordsPerDay,
		wordsPerHour,
		hoursPerDay
	}
}
