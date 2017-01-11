# parse-json

> Parse JSON with super way even if the key is not a string


## Install

```
$ npm install --save json-superparser
```


## Usage

```js
const parseJson = require('json-superparser');
const json = '{"foo": true, age: 18 }';

console.log(parseJson(json).age);
/*
   18
*/

```

## API

### json-superparser(input, [reviver], [filename])

#### input

Type: `string`

