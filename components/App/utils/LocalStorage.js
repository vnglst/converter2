//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

// localStorage store and update function
//
// Load data: const storedDate = store('storeName')
// Save data: store('storeName', loadedData)
//
// In React: use componentDidUpdate() {} to save component state after update
//
export default function store(namespace, data) {

	// first check whether we are in the browser and not prerendering in Node env
	const isBrowser = typeof window !== 'undefined';
	if (!isBrowser) return false;

	// If data parameter = defined, save data in localStorage
	if (data) {
		return localStorage.setItem(namespace, JSON.stringify(data));
	}

	// Else load data from localStorage
	const store = localStorage.getItem(namespace);

	// Return false if not found in localStorage
	return (store && JSON.parse(store));

}
