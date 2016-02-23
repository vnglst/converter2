# Translator's Converter

See it in action here: [http://converter.vangilst.de](http://converter.vangilst.de)

### Getting Started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone https://github.com/vnglst/converter2.git converter2
$ cd converter2
$ npm install
$ npm start
```

### Deploy beta

```shell
$ npm run deploy-beta           # deploys with surge on converter-beta.vangilst.de
```

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to converter.vangilst.de
```

### How to Deploy on a Server with Caddy

- See [Caddyfile gist](https://gist.github.com/vnglst/354ca3208b6dfdfbae81)

### Structure App

The app itself is located in the Components folder and has the following structure. Utils contains shared utilities and models. The folder common contains shared components.
```
├── App
│   ├── Converter
│   │   ├── DetailsAccordion
│   │   ├── LinesToWords
│   │   ├── Settings
│   │   └── WordsToLines
│   ├── img
│   └── utils
├── Content
├── Fonts
├── Footer
├── GoogleAnalytics
├── Html
├── Layout
├── Link
└── Navigation
```
