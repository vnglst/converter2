//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import 'babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import Location from './core/Location'
import Layout from './components/Layout'

const routes = {} // Auto-generated on build. See tools/lib/routes-loader.js

const route = async (path, callback) => {
	const handler = routes[path] || routes['/404']
	const component = await handler()
	await callback(<Layout>{React.createElement(component)}</Layout>)
}

function run() {
	const container = document.getElementById('app')
	Location.listen(location => {
		route(location.pathname, async component =>
			ReactDOM.render(component, container, () => {}),
		)
	})
}

if (canUseDOM) {
	// Run the application when both DOM is ready and page content is loaded
	if (
		['complete', 'loaded', 'interactive'].includes(document.readyState) &&
		document.body
	) {
		run()
	} else {
		document.addEventListener('DOMContentLoaded', run, false)
	}
}

export default { route, routes }
