//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="Text-Content">

        <h1>About this website</h1>
        <p>
          This website helps translators convert word to line prices and vice versa.
          Charging per line is common practice in Germany, where a standard line (or "Normzeile") is assumed to be 55 characters including spaces. Line prices may sound complicated and strange to translators used to charging per word, but for many languages this is actually a better and fairer way to estimate the amount of translation work involved. German words, for example, tend to be longer than English words and Finnish words are even longer still. Many agencies and clients outside Germay, however, still use word counts to estimate their prices. And that's where this conversion tool might come in handy!
        </p>

        <h2>Help needed</h2>
        <p>
          I made the Translator's Converter as a <span className="strikethrough">weekend</span> side project and I'd love to get feedback from fellow translators. What features are still missing? Are the results accurate for languages other than the ones I speak (Dutch, German & English)? I'm also specifically looking for the number of characters per word (including spaces) for different kinds of texts (e.g. legal, technical, financial and marketing texts). Feel free to contact me on <a href="https://twitter.com/vnglst">Twitter</a> or via <a href="http://vangilst.de/en/contact/">email</a>.
        </p>

        <h2>Default values</h2>
        <p>
          The default values for word and line rates are from the German Justizvergütungs- und -entschädigungsgesetz (<a href="http://www.gesetze-im-internet.de/jveg/__11.html">JVEG</a>):
        </p>
          <blockquote>
            Das Honorar für eine Übersetzung beträgt 1,55 Euro für jeweils angefangene 55 Anschläge des schriftlichen Textes (Grundhonorar). Bei nicht elektronisch zur Verfügung gestellten editierbaren Texten erhöht sich das Honorar auf 1,75 Euro für jeweils angefangene 55 Anschläge (erhöhtes Honorar). Ist die Übersetzung wegen der besonderen Umstände des Einzelfalls [...] besonders erschwert, beträgt das Grundhonorar 1,85 Euro und das erhöhte Honorar 2,05 Euro. Maßgebend für die Anzahl der Anschläge ist der Text in der Zielsprache; [...]. [<a href="https://de.wikipedia.org/wiki/Normzeile">Wikipedia</a>]
          </blockquote>
        <p>
          The default values for characters per line/page and words per day are based on my own experience and may vary greatly per subject and translator. Those values can be changed in the Settings tab and these changes will be saved in your browser (using a cookie).
        </p>
        <h2>Current features</h2>
        <ul>
          <li>Calculate line rates based on word rates</li>
          <li>Calculate word rates based on line rates</li>
          <li>Conversion metrics based on Wolfram Alpha (all languages)</li>
          <li>Conversion metrics based on EU corpus (all EU languages)</li>
          <li>Conversion metrics for different kinds of source texts for German</li>
        </ul>
        <h2>Planned features</h2>
        <ul>
          <li className="strikethrough">Add mobile version</li>
          <li className="strikethrough">Add more source languages</li>
          <li className="strikethrough">Add more rates (per page, per hour & per day)</li>
          <li className="strikethrough">Add more averages for different kinds of texts</li>
          <li className="strikethrough">Make source code available on Github</li>
          <li>Add target languages</li>
        </ul>

        <h2>What people are saying</h2>

        <blockquote className="twitter-tweet" lang="nl"><p lang="en" dir="ltr">Word to Line Rates - Useful tool for German translators who often charge per line <a href="http://t.co/GtwYso9EIo">http://t.co/GtwYso9EIo</a> <a href="https://twitter.com/hashtag/xl8?src=hash">#xl8</a></p>&mdash; Alessandra Vita (@AVInterpreter) <a href="https://twitter.com/AVInterpreter/status/654233874935975936">14 oktober 2015</a></blockquote>

        <blockquote className="twitter-tweet" lang="nl"><p lang="en" dir="ltr">Word to Line Rates: useful conversion tool for translators <a href="http://t.co/gd5IV1rK2k">http://t.co/gd5IV1rK2k</a> <a href="https://twitter.com/hashtag/business?src=hash">#business</a> <a href="https://twitter.com/hashtag/xl8?src=hash">#xl8</a></p>&mdash; Giorgia Garavini (@GioGaravini) <a href="https://twitter.com/GioGaravini/status/655001270269399040">16 oktober 2015</a></blockquote>

        <blockquote className="twitter-tweet" data-lang="nl"><p lang="en" dir="ltr">My awesome colleague <a href="https://twitter.com/vnglst">@vnglst</a> created a word to line price converter - so handy to have for the German market! <a href="http://t.co/L20jsT6IX6">http://t.co/L20jsT6IX6</a> <a href="https://twitter.com/hashtag/xl8?src=hash">#xl8</a></p>&mdash; Leonie Wagener (@l_wagener) <a href="https://twitter.com/l_wagener/status/539444622653939712">1 december 2014</a></blockquote>

        <blockquote className="twitter-tweet" lang="nl"><p lang="en" dir="ltr">Awesome tool for <a href="https://twitter.com/hashtag/translators?src=hash">#translators</a>! Word to line <a href="https://twitter.com/hashtag/rate?src=hash">#rate</a> converter! <a href="http://t.co/tKHdeKpKwY">http://t.co/tKHdeKpKwY</a></p>&mdash; Martina@MovingWords (@mrMovingWords) <a href="https://twitter.com/mrMovingWords/status/654239049079746560">14 oktober 2015</a></blockquote>

      </div>
    );
  }
}
