# Translator's Converter

See it in action here: [https://converter.koenvangilst.nl](https://converter.koenvangilst.nl)

### Getting Started

Just clone the repo, install Node.js modules and run `yarn start`:

```
$ git clone https://github.com/vnglst/converter2.git converter2
$ cd converter2
$ yarn
$ yarn start
```

### How to Deploy

The site is a static export, self-hosted on Coolify through the shared
`static-sites` Nginx container (see `coolify-agent/features/static-sites.md`).
Visitor stats come from self-hosted Plausible at https://plausible.koenvangilst.nl.

```shell
$ npm run dist               # builds a release into dist/ (commit the result)
```

Push `dist/` to `master`, then update this repo's pinned commit in
`static-sites` to publish it on converter.koenvangilst.nl.

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
├── Html
├── Layout
├── Link
└── Navigation
```
