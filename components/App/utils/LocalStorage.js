//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

// localStorage store and update function
export default function store(namespace, data) {
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