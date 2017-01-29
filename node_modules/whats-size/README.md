# Library

![WhatsSize Logo](/src/images/logo.png)

> A simple library to convert clothes and shoes to Europe, USA and Brazilian Sizes

# Install

```sh
$ npm install --save whats-size
```

# Techs Involved

- TypeScript (Transpiled to ES5)
- Webpack (Module Bundler, used to FrontEnd)
- Gulp (Build System)
- Mocha (Test)

# Test

For run tests, use task `test`, on gulp, just like this:

```sh
gulp test
```

# Build

For build project, use task `build`, just like this:

```sh
gulp build
```

Lib output: ./lib/

# Update database

For update database, first of all update file `./src/sizes.xls`, and then use task `database`, just like this:

```sh
gulp database
```

After run the command the file ` ./src/db/sizes.json` will be created

# Test on client-side

For test on client-side project, use task `serve`, just like this:

```sh
gulp serve
```

This command provides a static webserver using module `connect`, if you change something, build the project again. (Sorry I will implement watch in next updates).

Lib output: ./lib/

# Using this module in node

```ts
import { MenSize } from "whats-size";

let menSize = new MenSize("brl");
menSize.suits.convert("46") // brl: "36";
```

- To use the `WhatsSizes` as JavaScript

```js
const MenSize = require('whats-size').MenSize;

const menSize = new MenSize("brl");
menSize.suits.convert("46") // brl: "36";
```

# Using this module on browser (Client-side)

There are many ways to use this module directly on client-side, if you use the file `whats-size.webpack.js` the object WhatsSize will be created in global context, in that case use, example bellow:

```js
var menSize = window.WhatsSize.MenSize;
var womenSize = window.WhatsSize.WomenSize;

menSize.shoes.convert("40");
womenSize.shoes.convert("37");
```

This module is compatible with webpack and doesn't use a specific or native node module, because of this I mean that could be compatible with Requirejs, Browserify, SystemJS and so force.

## How to contribute

Do you have any idea or found a bug ?

[See how to contribute](CONTRIBUTING.md)

# Next steps

- Fix errors on database (sizes.xls)

# License

MIT License [William Sena](http://www.coisadeprogramador.com.br)

# Thanks

This project was based on scaffolding [Node TypeScript](https://github.com/ospatil/generator-node-typescript)