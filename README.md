# Translator's Converter

### Getting Started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone https://github.com/vnglst/converter2.git converter2
$ cd converter2
$ npm install
$ npm start
```

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to surge.sh
```
Using ```git commit``` also runs the deploy command.

### Structure App

The app itself is located in the Components folder and has the following structure. Utils contains shared utilities and models. The folder common contains shared components.

├── App
│   ├── Converter
│   │   ├── DetailedOutPut
│   │   │   └── PriceOutput
│   │   ├── DetailsBox
│   │   ├── InputBox
│   │   │   ├── LangSelect
│   │   │   └── PriceSelect
│   │   ├── OutputBox
│   │   │   └── PriceOutput
│   │   └── common
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
