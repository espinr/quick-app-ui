# Quick App Component Library Project

Quick App official component library project localization into English.

## Component Preview

Use the browser or the Quick Application Debugger (Android App) to scan the code and preview the component.
![Component library QR code](./docs/assets/qrcode.png)

## Usage

Use one of the following methods to install the dependencies to launch the project:

```sh
npm install qui --save # Use npm.
yarn add qui # Use yarn
```

The component library is developed using less, so you need to install the corresponding dependency.

```sh
npm install less less-loader --save-dev
```

## Project Structure

```sh
├── docs                # Directory of component library documents
├── sign                # Sample signature of the component library
│   ├── debug
│   └── release
└── src                 # Sample of components code
    ├── common
    ├── components      # Library of components
    │   └── button
    └── pages           # Sample pages
        ├── button
        └── home
```

##Development Get Started

```shell script
npm install     # Dependencies installation
npm run dev     # Start document server
npm run server  # Enable sample compilation and debugging of the code
```
