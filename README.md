# Translator's Converter

See it in action here: [http://converter.vangilst.de](http://converter.vangilst.de)

### Getting Started

Just clone the repo, install Node.js modules and run `yarn start`:

```
$ git clone https://github.com/vnglst/converter2.git converter2
$ cd converter2
$ yarn
$ yarn start
```

### Deploy beta

```shell
$ yarn deploy-beta           # deploys with surge on converter-beta.vangilst.de
```

### How to Deploy

```shell
$ yarn deploy                # Deploys the project to converter.vangilst.de
```

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
