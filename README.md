# Simple Random

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
var tempFilePrefix=sr(); //generates a 16 character alpha-numeric string.
```
##Parameters
- `length`:  The length of the alpha-numeric string. (default 16)
- `chars`: A string containing all the characters to draw from (default is all alpha-numeric characters.
 
```javascript
var sr = require('simple-random');
var randomAbc= sr(10,'abc!'); //generates a 10 character string which will contain only 'abc!' characters.
```
