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
var tempFilePrefix=sr(); //generates a 16 character alpha-numeric string. example output: "pnxTcl2nOBqTNFQR"
```
##Options
- `length`:  The length of the alpha-numeric string. (default 16)
- `chars`: A string containing all the characters to draw from (defaults to all alpha-numeric characters).
- `prefix`: prefix.
- `suffix`: suffix.

```javascript
var sr = require('simple-random');
var randomAbc= sr({length:10,chars:'123-',prefix:"file_",suffix:".temp"}); //example output: "file_3333322-23.temp"
```
