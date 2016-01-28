//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

export function store (namespace, data) {
  // first check whether we are in the browser
  // and not prerendering in Node env
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) return false;

	if (data) {
		return localStorage.setItem(namespace, JSON.stringify(data));
	}
	var store = localStorage.getItem(namespace);

	// Returns false if not found in localStorage
	return (store && JSON.parse(store));
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

// Calculates and returns the average of an array
export function average (arr) {
	var total = arr.reduce(function(a, b) {
  return a + b;
	});
	return total / arr.length;
}

// Generates a list of price options for select input field
export function generatePriceOptions(start, max, steps) {
	let priceOptions = [];
	for (let priceOption = start; priceOption <= max; priceOption += steps)
		priceOptions.push(priceOption.toFixed(2));
	return priceOptions;
}
