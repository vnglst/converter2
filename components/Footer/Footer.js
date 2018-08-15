//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react'
import './Footer.scss'
import Link from '../Link'

function Footer() {
	return (
		<div className="Footer">
			<p>
				Translator's Converter is released under{' '}
				<a href="https://github.com/vnglst/converter2/blob/master/LICENSE">
					MIT License
				</a>
				. This website is made by{' '}
				<a href="https://koenvangilst.nl/">Koen van Gilst</a> (
				<a href="https://twitter.com/vnglst">@vnglst</a>) and the source code is{' '}
				<a href="https://github.com/vnglst/converter2">available on Github</a>.{' '}
				<a href="/disclaimer">Disclaimer</a>.
			</p>
			<p>
				This app converts word to line rates and vice versa. A standard line (a
				German "Normzeile") is assumed to be 55 characters including spaces. The
				converter also converts per line to per word prices.
			</p>
		</div>
	)
}

export default Footer
