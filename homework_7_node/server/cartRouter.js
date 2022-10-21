const express = require('express');
const fs = require('fs');
const router = express.Router();
// const handler = require('./handler');

router.get('/', (req, res) => {
  fs.readFile('server/db/getBasket.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }));
    } else {
      res.send(data);
    }
  })
});

module.exports = router;