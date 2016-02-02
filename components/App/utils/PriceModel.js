import LangModel from './LangModel.js';
import * as utils from './utils.js';

const languageData = LangModel.getAllLangData();

// Retrieves the array of characters per word for certain language
const getCharsPerWordArr = function(langName) {
  const stats = LangModel.getStats(langName);
  const charsPerWordArr = stats.map ( obj => obj.charsPerWord)
  return charsPerWordArr;
}

// Calculates average wordPrice
const calcWordPrice = function(langName, charPrice) {
  const charsPerWordArr = getCharsPerWordArr(langName);
  const charsPerLine = utils.average(charsPerWordArr);
  const wordPriceArr = charsPerWordArr.map(charsPerWord => charsPerWord * charPrice);
  const wordPrice = utils.average(wordPriceArr);
  return wordPrice;
}

// Calculated average charPrice
const calcCharPrice = function(langName, wordPrice){
  const charsPerWordArr = getCharsPerWordArr(langName);
  const charPriceArr = charsPerWordArr.map(charsPerWord => wordPrice / charsPerWord);
  const charPrice = utils.average(charPriceArr);
  return charPrice;
}

export default class {
  constructor(options) {
    // Defaults
    this.charsPerLine = 55;

    // Options
    this.langName = options.langName;
    options.linePrice && this.setLinePrice(options.linePrice);
    options.wordPrice && this.setWordPrice(options.wordPrice);
  }

  setLang = (langName) => {
    this.langName = langName;
    this.setCharPrice(this.charPrice);
  }

  setCharPrice = (charPrice) => {
    this.charPrice = charPrice;
    this.wordPrice = calcWordPrice(this.langName, this.charPrice);
    this.linePrice = this.charPrice * this.charsPerLine;
  }

  setLinePrice = (linePrice) => {
    this.setCharPrice(linePrice / this.charsPerLine);
  }

  setWordPrice = (wordPrice) => {
    const charPrice = calcCharPrice(this.langName, wordPrice);
    this.setCharPrice(charPrice);
  }

  getLangStr = () => this.langName;
  getWordPriceStr = () => utils.priceToEuroString(this.wordPrice);
  getLinePriceStr = () => utils.priceToEuroString(this.linePrice);
  getCharPriceStr = () => utils.priceToEuroString(this.charPrice);
}
