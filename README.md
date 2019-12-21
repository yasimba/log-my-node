## Install

```
$ npm install log-my-node
```

## Quickstart

```js
const lg = require('log-my-node');
lg.log(1939)
```

## With ExpressJS

```js
const lg = require('log-my-node');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    lg.log("Now I can log with Line Numbers!!!")
    res.send('Hello World!'))
} 

app.listen(port, () => console.log(`Magic happens on:  ${port}!`))
```

