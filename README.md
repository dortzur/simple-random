# Simple Random
[![Build Status](https://travis-ci.org/dortzur/simple-random.svg?branch=master)](https://travis-ci.org/dortzur/simple-random) [![npm](http://img.shields.io/npm/v/npm.svg)](https://www.npmjs.org/package/simple-random) [![npm version](https://badge.fury.io/js/simple-random.svg)](http://badge.fury.io/js/simple-random)

A simple library to create random alpha numeric strings.
Very useful for creating for random names for files and folders, among other usages.

Can also be configured to allow for none alpha-numeric characters.

##Installation
```bash
npm install simple-random --save 
```
##Usage
```javascript
var sr = require('simple-random');
var tempFilePrefix=sr(); //Generates a 16 character alpha-numeric string.
Example output: "pnxTcl2nOBqTNFQR"
```
##Options
- `length`:  The length of the alpha-numeric string. (default 16)
- `chars`: A string containing all the characters to draw from (defaults to all alpha-numeric characters).
- `prefix`: prefix.
- `suffix`: suffix.

```javascript
var sr = require('simple-random');
var random123= sr({length:10,chars:'123-',prefix:"file_",suffix:".temp"}); // Example output: "file_3133322-23.temp"
```
