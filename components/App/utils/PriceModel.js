import LangModel from './LangModel.js';
import * as utils from './utils.js';

let languageData = LangModel.getAllLangData();

//
let getCharsPerWordArr = function(langName) {
  const stats = LangModel.getStats(langName);
  const charsPerWordArr = stats.map ( obj => obj.charsPerWord)
  return charsPerWordArr;
}

export default class {
  constructor(langName) {
    this.langName = langName;
    this.charsPerWordArr = getCharsPerWordArr(this.langName);
    this.charsPerWord = utils.average(this.charsPerWordArr);
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
    this.wordPriceArr = this.charsPerWordArr.map( charsPerWord => charsPerWord * charPrice );
    this.wordPrice = utils.average(this.wordPriceArr);
    this.update();
  }

  setLinePrice = (linePrice) => {
    this.setCharPrice(linePrice / this.charsPerLine);
  }

  setWordPrice = (wordPrice) => {
    this.wordPrice = wordPrice;
    this.charPriceArr = this.charsPerWordArr.map( charsPerWord => wordPrice / charsPerWord );
    this.linePriceArr = this.charPriceArr.map( chars => chars * this.charsPerLine );
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
