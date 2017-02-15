/**
 * 開発時検証用サーバ。
 */

import express from 'express'

const app = express()
const port = 3000

//accessログ排出用（標準出力に出力）
const morgan = require('morgan');
app.use(morgan('combined'));

//検証用のhtmlの配備
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
