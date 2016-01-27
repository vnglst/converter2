import LangModel from './LangModel.js';
import * as utils from './utils.js';

let languageData = LangModel.getAllLangData();

// Calculates word prices, returns an array of prices
let calcWordPriceArr = function(langName, charPrice) {
  const stats = LangModel.getStats(langName);
  const wordPriceArr = [];
  let wordPrice;
  // Loop through all charPerWord values
  stats.map(function (stats) {
    const charsPerWord = stats.charsPerWord;
    if (charsPerWord !== 0) {
      wordPrice = charPrice * charsPerWord;
      wordPriceArr.push(wordPrice);
    }
  })
  return wordPriceArr;
}

// Calculates char prices, returns an array of prices
let calcCharPriceArr = function (langName, wordPrice) {
	const stats = LangModel.getStats(langName);
	let charPriceArr = [];
	let charPrice;
	// Loop through all charPerWord values
	stats.map(function (stats) {
		const charsPerWord = stats.charsPerWord;
		if (charsPerWord !== 0) {
			charPrice = wordPrice / charsPerWord;
			charPriceArr.push(charPrice);
		}
	})
	return charPriceArr;
}

export default class {
  constructor(langName) {
    this.langName = langName;
    this.charsPerLine = 55;
    this.wordsPerHour = 250;
    this.charsPerPage = 1500;
  }

  update = () => {
    this.pagePrice = this.charPrice * this.charsPerPage;
    this.hourPrice = this.wordPrice * this.wordsPerHour;
    this.linePrice = this.charPrice * this.charsPerLine;
  }

  setCharPrice = (charPrice) => {
    this.charPrice = charPrice;
    this.wordPriceArr = calcWordPriceArr(this.langName, this.charPrice);
    this.wordPrice = utils.average(this.wordPriceArr);
    this.update();
  }

  setLinePrice = (linePrice) => {
    this.setCharPrice(linePrice / 55);
  }

  setWordPrice = (wordPrice) => {
    this.wordPrice = wordPrice;
    this.charPriceArr = calcCharPriceArr(this.langName, this.wordPrice);
    this.linePriceArr = this.charPriceArr.map( chars => chars * 55);
    this.charPrice = utils.average(this.charPriceArr);
    this.update();
  }

  setWordsPerHour = (wordsPerHour) => {
    this.wordsPerHour = wordsPerHour;
  }

  getWordPrice = () => {
    return utils.priceToEuroString(this.wordPrice);
  }

  getWordPriceRange = () => {
    return utils.priceToEuroString(this.wordPriceArr);
  }

  getLinePrice = () => {
    return utils.priceToEuroString(this.linePrice);
  }

  getLinePriceRange = () => {
    return utils.priceToEuroString(this.linePriceArr);
  }

  getCharPrice = () => {
    return utils.priceToEuroString(this.charPrice);
  }

  getHourPrice = () => {
    return utils.priceToEuroString(this.hourPrice);
  }

  getPagePrice = () => {
    return utils.priceToEuroString(this.pagePrice);
  }

}
