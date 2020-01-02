## Install on npm

[![Install on NPM](https://cdn.freebiesupply.com/logos/thumbs/1x/npm-logo.png)](https://www.npmjs.com/package/log-my-node)

## Quickstart

```js
const lg = require('log-my-node');
lg.log(1939)
/*
Outputs: 
my/file/location/file.js:lineNumber:columnNumber 1939
*/
```

## With ExpressJS

```js
const lg = require('log-my-node');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    console.log("Before");
    lg.log("After!")
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Magic happens on port ${port}!`))


/*
Outputs: 

Before

my/file/location/file.js:lineNumber:columnNumber  After!

*/
```

