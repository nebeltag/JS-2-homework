const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
  fs.readFile('server/db/getBasket.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }));
    } else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  handler(req, res, 'add', 'server/db/getBasket.json');
});
router.put('/:id', (req, res) => {
  handler(req, res, 'change', 'server/db/getBasket.json');
});
router.delete('/:id', (req, res) => {
  handler(req, res, 'remove', 'server/db/getBasket.json');
});


module.exports = router;