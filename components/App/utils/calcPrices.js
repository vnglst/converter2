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

export default function calcPrices({
	charsPerLine = 55,
	charsPerPage = 1500,
	wordsPerDay = 2000,
	hoursPerDay = 7,
	wordsPerHour = wordsPerDay / hoursPerDay,
	sourceLang,
	charPrice,
	linePrice,
	wordPrice
}) {
	// Options
	charPrice = linePrice / charsPerLine || calcCharPrice(sourceLang, wordPrice);
	wordPrice = wordPrice || calcWordPrice(sourceLang, charPrice);
	linePrice = linePrice || charPrice * charsPerLine;

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
