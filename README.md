# Simple Random
[![Build Status](https://travis-ci.org/dortzur/simple-random.svg?branch=master)](https://travis-ci.org/dortzur/simple-random)  [![npm version](https://badge.fury.io/js/simple-random.svg)](http://badge.fury.io/js/simple-random) [![npm](http://img.shields.io/npm/dm/simple-random.svg)](https://www.npmjs.com/package/simple-random)

A simple javascript library meant to help create secure random alpha-numeric strings.
Very useful when creating random names for files, folders and secure random temporary passwords.

Can also be configured to allow for none alpha-numeric characters.

##Installation
```bash
npm install simple-random --save 
```
##Usage
```javascript
var sr = require('simple-random');
var tempFilePrefix=sr(); // Generates a 16 character alpha-numeric string.
// Example output: "pnxTcl2nOBqTNFQR"
```
##Options
- `length`:  The length of the alpha-numeric string. (default 16)
- `chars`: A string containing all the characters to draw from (defaults to all alpha-numeric characters).
- `prefix`: Prefix.
- `suffix`: Suffix.
- `secure`: Whether or not to use the `crypto` library for secure random byte seed as opposed to `Math.random()` (default true).
```javascript
var sr = require('simple-random');
var random123= sr({length:10,chars:'123-',prefix:"file_",suffix:".temp"});
// Example output: "file_3133322-23.temp"
```
